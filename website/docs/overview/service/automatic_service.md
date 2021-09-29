---
title: "Luật tự động"
---

Service bao gồm nhóm các service (endpoint) nhỏ hơn chịu trách nhiệm quản lý, lưu trữ, xử lý vận hành luật tự động trong hệ thống

![](https://makihome.vn/wp-content/uploads/2020/07/automatic.png "Luật tự động")

Luật tự động trong hệ thống IOT Makipos được xây dựng theo mô hình **nếu ... thì ...**

Mô hình cho phép bổ sung cập nhật điều kiện và hành động linh động. Gần như không giới hạn số lượng các điều kiện và hành động có thể thực hiện.

## Điều kiện

Là các service độc lập
- Lắng nghe điều kiện và khởi tạo một cuộc gọi tới lõi xử lý mệnh đề logic khi điều kiện được đáp ứng
- Nhận yêu cầu truy vấn hỏi đáp trạng thái thỏa mãn hoặc ko thỏa mãn tại thời điểm truy vấn

## Hành động

Là các service độc lập
- Nhận yêu cầu thông qua cuộc gọi http và thực hiện hành động.
- Đối với các hành động thao tác trong hệ thống Makipos. Mọi truy vấn được bảo mật cấp quyền thông qua token.

## Lõi xử lý phép logic

Service có khả năng hoạt động song song phân tải,
- Kiểm tra tổng hợp điều kiện từ tất cả các service điều kiện
- Khởi tạo cuộc gọi tới hành động tương ứng nếu **biểu thức logic** (trong đó mỗi điều kiện sẽ đóng vai trò như 1 tham biến) đạt kết quả đúng
