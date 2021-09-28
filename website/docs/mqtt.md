---
title: MQTT
---

Kết nối sử dụng giao thức mqtt hỗ trợ mqtt và websocket, cho phép việc sử dụng ssl hoặc không. Việc sử dụng ssl cho kết nối giúp mã hóa đường truyền, tuy nhiên sẽ làm tăng tải cho mqtt broker.

Tất cả các kết nối tới broker đều phải sử dụng username và mật khẩu của tài khoản người dùng hoặc thiết bị tồn tại trên hệ thống.

Quyền truy cập, publish, subcribe của từng tài khoản tới 1 topic cụ thể được kiểm soát bởi dữ liệu lưu trong redis:
![](https://makihome.vn/wp-content/uploads/2020/07/device_acl.png)
Do vậy chỉ những tài khoản người dùng hoặc thiết bị có quyền truy cập tương ứng tới 1 thiết bị cụ thể mới có thể đăng ký lắng nghe dữ liệu hoặc gửi dữ liệu điều khiển tới cho thiết bị.

Bản tin gửi tới MQTT có thể đặt giới hạn tốc độ ghi nhận dữ liệu nhằm tránh việc quá tải hệ thống.
