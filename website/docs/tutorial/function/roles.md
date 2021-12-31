---
title: "Phân quyền"
---

Hướng dẫn sử dụng chức năng [xác thực phân quyền](overview/security/http.md)

## Cơ chế

![](https://makihome.vn/wp-content/uploads/2020/07/http-secure.png)

### Mỗi HTTP request sẽ bao gồm các thông tin
- Headers : header của request (chứa mã token xác thực)
- URL : `protocol`://`domain`:`port`/`path`[/`id`][?`params query`]
- Method : Rest API tuân theo cấu trúc sử dụng HTTP method như sau
  - GET có `id` : Lấy thông tin của một bản ghi cụ thể
  - GET không `id` : Lấy thông tin của tất cả các bản ghi thỏa mãn `params query`
  - POST : Tạo mới dữ liệu
  - PATCH có `id` : cập nhật dữ liệu của bản ghi cụ thể
  - PATCH không `id` : cập nhật dữ liệu của toàn bộ bản ghi thỏa mãn `params query`
  - UPDATE có `id` : thay mới dữ liệu của bản ghi cụ thể  (**không sử dụng**)
  - UPDATE không `id` : thay mới dữ liệu của toàn bộ bản ghi thỏa mãn `params query` (**không sử dụng**)
  - DELETE có `id` : xóa bản ghi cụ thể
  - DELETE không `id` : xóa tất cả bản ghi thỏa mãn `params query`
- Data payload (json):  Chứa dữ liệu cho các cuộc gọi `POST` `PATCH`

### Thông tin của 1 cuộc gọi được xác định như sau

Lưu ý các từ viết đậm này sẽ được sử dụng phía dưới
1. **HEADERS** : là `header` trong cuộc gọi (được xử lý ở dạng Object)
2. **PATH** : là `path` trong url tương ứng với 1 endpoint, service trong hệ thống. (Chuỗi)
3. **ID** : là `id` trong url cuộc gọi nếu có (xác định đối tượng dữ liệu cụ thể tác động dựa trên khóa chính `_id` trong cơ sở dữ liệu). (Chuỗi)
4. **QUERY** : là `params query` trong url cuộc gọi, chỉ định tham số lọc của các truy vấn tìm kiếm chỉnh sửa (Object)
5. **DATA** : là `payload` Chứa dữ liệu cho các cuộc gọi `POST` `PATCH` (Object)

### Thông tin Roles của một tài khoản
- Thông tin quyền hạn của một tài khoản được xác định trong [cơ sở dữ liệu](overview/database_struct.md#schema) thông qua trường `roles`.
- `roles` là một mảng các chuỗi, mỗi phần tử là tên của 1 role.
- **`role` nào ở trước sẽ được ưu tiên duyệt trước. Quá trình duyệt sẽ dừng lại khi tìm được cấu hình quyền cho phép**.

### Quá trình xử lý
1. Các cuộc gọi API đi vào hệ thống sẽ được xác minh người dùng thông qua JWT trong trường `Authorization`.
   - JWT được giải mã, xác định thông tin tài khoản thực hiện cuộc gọi
   - Dữ liệu của người dùng sau khi được xác định được lưu trong Object **USER**
2. Hệ thống lấy thông tin `roles` của tài khoản thực hiện cuộc gọi.
3. Cuộc gọi được điều chỉnh thông qua module phân quyền. Duyệt lần lượt qua từng role của tài khoản.
4. Thông tin cuộc gọi sau khi điều chỉnh được đẩy tới service.

## Cấu trúc Dữ liệu phân quyền

### Mongoose Schema

```js
{
  name: { type: String, trim: true, unique: true, required: true, index: true },
  permissions: [{
    url: { type: String },
    method: Schema.Types.Mixed,
    forbidden: {type: Boolean, default: false},
    limit: {
      whiteList: [{
        _id: false,
        entity: { type: String },
        idField: { type: String },
        idValue: [Schema.Types.Mixed]
      }],
      blackList: [{
        _id: false,
        entity: { type: String },
        idField: { type: String },
        idValue: [Schema.Types.Mixed]
      }],
      restrict: [{
        _id: false,
        entity: { type: String },
        idField: { type: String },
        idValue: Schema.Types.Mixed,
        ownerField: { type: String },
      }],
      skipPostRestrict: {type: Boolean, default: false},
      custom: [{
        _id: false,
        field: { type: String },
        force: Schema.Types.Mixed,
        range: [Schema.Types.Mixed],
        default: Schema.Types.Mixed
      }],
      apiOptions: Schema.Types.Mixed
    }
  }]
}
```

- `name` : Tên của role
- `permissions` : là mảng chứa danh sách thông tin phân quyền cho từng API endpoint
  - `url` : là **PATH** (tên endpoint, service) xác định endpoint, service mà luật này tác động, "all" nếu tác động lên tất cả endpoint
  - `method` : xác định http method mà luật này tác động
    - find : tương ứng với GET không `id`
    - get : tương ứng với GET có `id`
    - create : tương ứng với POST : Tạo mới dữ liệu
    - patch : tương ứng với PATCH có `id` và PATCH không `id`
    - update : tương ứng với UPDATE có `id` và UPDATE không `id`
    - remove : tương ứng với DELETE có `id` và DELETE không `id`
  - `forbidden` : boolean , true nếu cấm sử dụng
  - `limit`
    - `whiteList` : Mảng danh sách cho phép sử dụng api (trả về lỗi nếu không nằm trong danh sách)  (Xử lý trước blackList)
      - `entity` : tên object truy xuất thông tin của truy vấn (chuỗi)
      - `idField` : tên trường trong object `entity`
      - `idValue` : mảng chứa danh sách các giá trị được phép của trường dữ liệu trên
    - `blackList` : mảng danh sách không cho phép sử dụng api (trả về lỗi nếu nằm trong danh sách)
      - `entity` : tên object truy xuất thông tin của truy vấn (chuỗi)
      - `idField` : tên trường trong object `entity`
      - `idValue` : mảng chứa danh sách các giá trị không được phép của trường dữ liệu trên
    - `restrict` : mảng các luật sẽ tác động điều chỉnh lên [**QUERY**](#thông-tin-của-1-cuộc-gọi-được-xác-định-như-sau)
      - `entity` : tên object truy xuất thông tin của truy vấn (chuỗi)
      - `idField` : tên trường trong object `entity`
      - `idValue` : Nếu không sử dụng `entity`.`idField`. Có thể sử dụng giá trị cố định bằng trường này
      - `ownerField` : chuỗi tên trường cần điều chỉnh trong [**QUERY**](#thông-tin-của-1-cuộc-gọi-được-xác-định-như-sau). Nếu muốn tác động kiểm tra  [**ID**](#thông-tin-của-1-cuộc-gọi-được-xác-định-như-sau), trường này sẽ để giá trị là **"\__id__"**
      - Nếu `entity`.`idField` không tồn tại thì bỏ qua giới hạn này
    - `skipPostRestrict` : boolean , true nếu bỏ qua quá trình giới hạn phân quyền dựa trên bản ghi sở hữu [`relations`](overview/database_struct.md#relations). Thường sử dụng đối với các role tài khoản quản trị
    - `custom` : mảng các luật tác động điều chỉnh lên [**DATA**](#thông-tin-của-1-cuộc-gọi-được-xác-định-như-sau)  (Chỉ các động lên method POST và PATCH, UPDATE)
      - `field` : Chuỗi tên trường cần điều chỉnh, kiểm tra trong [**DATA**](#thông-tin-của-1-cuộc-gọi-được-xác-định-như-sau)
      - `force` : Thông tin điều chỉnh ép buộc. Có thể là 1 trong 2 kiểu
        1. Giá trị cụ thể
        2. Object chứa thông tin
          - `clear` : Xóa trường này
          - `entity` : tên object truy xuất thông tin của truy vấn (chuỗi)
          - `idField` : tên trường trong object `entity`
            - Nếu `entity`.`idField` không tồn tại thì sẽ trả về lỗi truy vấn không được phép
      - `range` : Nếu không sử dụng `force`. Mảng này chứa thông tin các giá trị được phép của giá trị của trường `field`
        - Mỗi phần tử có thể là :
          1. Giá trị cụ thể
          2. Object chứa thông tin
             - `entity` : tên object truy xuất thông tin của truy vấn (chuỗi)
             - `idField` : tên trường trong object `entity`
        - Nếu giá trị của trường dữ liệu không nằm trong giới hạn này thì hệ thống sẽ coi như luật này không có tác động và bỏ qua.
      - `default` : Sau khi xử lý các trường trên, nếu trường dữ liệu không tồn tại trong truy vấn. Giá trị mặc định được áp dụng. Có 2 kiểu giá trị:
        1. Gía trị cụ thể
        2. Object chứa thông tin:
           - `entity` : tên object truy xuất thông tin của truy vấn (chuỗi)
           - `idField` : tên trường trong object `entity`
    - `apiOptions` : Object dữ liệu cấu hình đặc thù dành riêng cho API endpoint nếu có

### Giá trị của trường thông tin `entity`

`entity` là tên trường của Obejct [feathersjs params](https://docs.feathersjs.com/api/services.html#params)
Các trường bạn thường sử dụng là:
1. "user" : Thông tin của tài khoản thực hiện truy vấn
   - Nếu tài khoản là user : object thông tin như [tại đây](overview/database_struct.md#users)
   - Nếu tài khoản là device : object thông tin như [tại đây](overview/database_struct.md#devices)
2. "headers" : Header của truy vấn
3. "payload" : Thông tin trong JWT mà cuộc gọi sử dụng

## Ví dụ

### Api endpoint `users`

1. Không cho phép điều chỉnh trường `roles` và `manufacturerId` trong api `users`

```json
{
    "forbidden" : false,
    "method" : "all",
    "url" : "users",
    "limit" : {
        "skipPostRestrict" : false,
        "custom" : [
            {
                "range" : [],
                "force" : {
                    "clear" : true
                },
                "field" : "roles"
            },
            {
                "range" : [],
                "force" : {
                    "clear" : true
                },
                "field" : "manufacturerId"
            }
        ],
        "restrict" : [],
        "whiteList" : [],
        "blackList" : []
    }
}
```

2. Chỉ cho phép lấy và tác động lên thông tin của bản thân trong api `users`

```json
{
  "forbidden" : false,
  "method" : "all",
  "url" : "users",
  "limit" : {
      "skipPostRestrict" : false,
      "custom" : [],
      "restrict" : [
          {
              "entity" : "user",
              "idField" : "_id",
              "ownerField" : "_id"
          },
          {
              "entity" : "user",
              "idField" : "_id",
              "ownerField" : "__id__"
          }
      ],
      "whiteList" : [],
      "blackList" : []
  }
}
```

3. Kết hợp cả 2 luật trên
```json
{
  "forbidden" : false,
  "method" : "all",
  "url" : "users",
  "limit" : {
      "skipPostRestrict" : false,
      "custom" : [
          {
              "range" : [],
              "force" : {
                  "clear" : true
              },
              "field" : "roles"
          },
          {
              "range" : [],
              "force" : {
                  "clear" : true
              },
              "field" : "manufacturerId"
          }
      ],
      "restrict" : [
          {
              "entity" : "user",
              "idField" : "_id",
              "ownerField" : "_id"
          },
          {
              "entity" : "user",
              "idField" : "_id",
              "ownerField" : "__id__"
          }
      ],
      "whiteList" : [],
      "blackList" : []
  }
}
```

4. Chỉ cho phép tác động lên các bản ghi user có trường `manufacturerId` bằng với `manufacturerId` của tài khoản thực hiện truy vấn. (nếu tài khoản thực hiện truy vấn không có `manufacturerId` thì bỏ qua giới hạn này). Đồng thời giới hạn thao tác chỉnh sửa trường `manufacturerId` buộc phải bằng `manufacturerId` của tài khoản truy vấn, trường `roles` buộc phải nằm trong danh sách giá trị "user","adminPartner","tester","department","cskh","agent"
```json
{
  "forbidden" : false,
  "method" : "all",
  "url" : "users",
  "limit" : {
      "skipPostRestrict" : false,
      "custom" : [
          {
              "range" : [],
              "force" : {
                  "entity" : "user",
                  "idField" : "manufacturerId"
              },
              "field" : "manufacturerId"
          },
          {
              "range" : [
                  "user",
                  "adminPartner",
                  "tester",
                  "department",
                  "cskh",
                  "agent"
              ],
              "field" : "roles"
          }
      ],
      "restrict" : [
          {
              "entity" : "user",
              "idField" : "manufacturerId",
              "ownerField" : "manufacturerId"
          }
      ],
      "whiteList" : [],
      "blackList" : []
  }
}
```

## Giao diện

### Giao diện quản lý phân quyền

![](/img/roles.png)

### Giao diện điều chỉnh phân quyền cho 1 API endpoint

![](/img/roles_edit.png)
