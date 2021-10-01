---
  title: Service
---

## Phân trang
`users-service` `devices-service` `relations-service` `automatic-service` `update-service` `files-service`

Định nghĩa cấu hình phân trang các api tìm kiếm `find`
```
"paginate": {
  "default": 200,
  "max": 1000
}
```

- `default`: giới hạn trang mặc định
- `max` : giới hạn trang lớn nhất người dùng có thể tùy chỉnh thông qua param `$limit` trong truy vấn

## Log
`users-service` `devices-service` `relations-service` `automatic-service` `update-service` `files-service`

```
"log2Console": true,
"logLevel": "debug",
"logPath": "/media/data/",
```

- `log2Console` : print log ra console terminal hay không
- `logLevel` : cấp độ log
- `logPath`: Folder chứa file log trong quá trình hoạt động (đường dẫn trong container)

## net_interface
`users-service` `devices-service` `relations-service` `automatic-service` `update-service` `files-service`

**Không sử dụng**. Chỉ thay đổi khi chạy trực tiếp trên máy

## private_network

`users-service` `devices-service` `relations-service` `automatic-service` `update-service` `files-service`

```
"private_network": {
  "addr": "10.200.0.0",
  "whiteList":[]
}
```

- `addr`: dải địa chỉ trong mạng nội bộ của các service
- `whiteList`: danh sách IP ngoại lệ ở ngoài mạng

## Giới hạn số lượng dữ liệu cho user

```
"limit": {
  "schema": 100
}
```
- `schema` : giới hạn số lượng kịch bản có thể tạo của mỗi user  `users-service`
- `rule`   : giới hạn số lượng luật tự động có thể tạo của mỗi user `automatic-service`

## Firebase notify
`users-service`

```
"firebase": {
  "serviceAccountKey": "",
  "databaseURL": ""
}
```

## Liên kết google assitant
`users-service` `devices-service` `relations-service`

```
"googleApikey": "",
"googleClientId": "",
"googleClientSecret": "",
```

## Liên kết maika assistant
`users-service` `devices-service` `relations-service`

```
"maikaClientId":"",
"maikaClientSecret":"",
"maikaHomeGraphKey":"",
"maikaHomeGraphUrl":"https://staging.actions-api.iviet.com/v1/devices",
```

## Open weather map api
`users-service`

```
"openweatherapiKey": "",
```

## Slack notify
`users-service` `devices-service` `relations-service` `automatic-service` `update-service` `files-service`

Cấu hình slack notify để thông báo trạng thái hoạt động của service qua kênh slack. Thông báo lỗi, thông báo khởi động

```
"slack":{
  "token":"",
  "conversationId":""
},
```
