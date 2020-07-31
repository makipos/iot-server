---
title: Quyền sở hữu
---

Service lưu trữ, quản lý mối quan hệ sở hữu giữa người dùng và thiết bị.

Yếu tố bảo mật là một trong những vấn đề quan trọng trong một hệ thống IOT. Bên cạnh bảo mật truy cập, quản lý hệ thống, đối với người dùng trong hệ thống thì đó là quyền kiểm soát truy cập đối với từng thiết bị vât lý mà người dùng sở hữu.

Chúng tôi đảm bảo việc này thông qua giao thức MQTT và phân quyền giới hạn đối vời từng topic cụ thể, vửa đảm bảo hiệu năng lẫn tính bảo mật quyền truy cập.

Có 3 loại mối quan hệ sở hữu

1. Người dùng - thiết bị
  ![](https://makihome.vn/wp-content/uploads/2020/01/user_device_relations.svg "quan hệ sở hữu thiết bị")
  Dữ liệu quan hệ sở hữu này được lưu trữ trong mongodb và được đồng bộ với bảng ACL trong [redis](database.md#redis)  

2. Thiết bị gateway - thiết bị không hỗ trợ kết nối internet

Đối với các thiết bị IOT không hỗ trợ khả năng kết nối MQTT trực tiếp tới server, dữ liệu buộc phải được truyền tải thông qua một gateway trung gian. Quá trình này cũng được đảm bảo bảo mật, những gateway chỉ được cấp quyền truy cập gửi và nhận dữ liệu thay mặt cho thiết bị con xác định, được thiết lập thông qua 1 quy trình thêm thiết bị bởi người dùng.
