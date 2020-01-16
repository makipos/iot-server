---
title: HTTP
---

Http api được cung cấp thông qua cổng dịch vụ 3028, 3029(https) sử dụng cơ chế token xác thực trong mỗi truy vấn.

![](https://makihome.vn/wp-content/uploads/2020/01/user_roles.svg)

Với mỗi token định danh của user, tất cả truy vấn sẽ phải đi qua 1 lớp xác thực kiểm tra quyền hạn của user đó đối với từng endpoint.

Lớp xác thực được thiết kế linh động và chặt chẽ, cho phép kiểm tra và sửa đổi truy vấn của người dùng trước khi đến với service xử lý.

Tất cả quyền hạn này đều có thể được tạo mới, thu hồi xóa bỏ bởi người dùng có quyền quản trị hệ thống.
