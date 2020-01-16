---
title: Quyền sở hữu
---

Service lưu trữ, quản lý mối quan hệ sở hữu giữa người dùng và thiết bị.

Có 3 loại mối quan hệ sở hữu

1. Người dùng - thiết bị
  ![](https://makihome.vn/wp-content/uploads/2020/01/user_device_relations.svg "quan hệ sở hữu thiết bị")
  Dữ liệu quan hệ sở hữu này được lưu trữ trong mongodb và được đồng bộ với bảng ACL trong [redis](database.md#redis)  

2. Thiết bị gateway - thiết bị không hỗ trợ kết nối internet
3. Nhóm người dùng - người dùng
