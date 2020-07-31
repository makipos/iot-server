---
title: Thiết bị
---

Service bao gồm 1 nhóm các service (endpoint) nhỏ hơn chịu trách nhiệm quản lý, lưu trữ thông tin của thiết bị.

![](https://makihome.vn/wp-content/uploads/2020/07/device-type-struct.png)

Tổ chức quản lý thiết bị được tách biệt ra loại thiết bị và danh sách các thuộc tính của loại thiết bị.

## Trạng thái thiết bị

Service lưu trữ thông tin, trạng thái hiện thời của thiết bị cụ thể. Bao gồm
- Mã thiết bị
- Trạng thái kết nối, mất kết nối của thiết bị
- Tọa độ địa lý của thiết bị (nếu có)
- Phiên bản phần cứng, phần mềm
- Trạng thái hệ thống của thiết bị (sản xuất, test, lưu kho, đang sử dụng ...)
- Giá trị hiện thời của từng thuộc tính của thiết bị (Bât/Tắt, tốc độ, lỗi, ...)

## Loại thiết bị

Service quản lý lưu trữ các loại thiết bị trong hệ thống.

Bao gồm:
- Tên loại thiết bị.
- Ảnh loại thiết bị.
- Các giao thức kết nối được hỗ trợ .
- Danh sách các thuộc tính được hỗ trợ.

## Loại thuộc tính

Service này quản lý lưu trữ các loại thuộc tính của thiết bị trong hệ thống.

Bao gồm:
- Tên thuộc tính
- Mã thuộc tính
- Hỗ trợ ghi, đọc
- Loại dữ liệu
- Đơn vị
- Khoảng giá trị
- icon hiển thị

## Hẹn giờ

Thiết bị của Makihome cung cấp khả năng đặt lịch hẹn giờ điều khiển thiết bị. Lịch hẹn được tạo và lưu trữ trên hệ thống, sau đó thiết bị sẽ động bộ dữ liệu và lập lịch. Cơ chế đảm bảo lịch hẹn hoạt động ổn định không bị ảnh hưởng bới kết nối mạng.

## Lịch sử thiết bị

Phục vụ yêu cầu phân tích lưu trữ xử lý dữ liệu lớn trong hệ thống IOT. Lịch sử cập nhật trạng thái của thiết bị cùng các cuộc gọi API đều được lưu trữ.

## Quản lý quá trình sản xuất, kiểm thử

Dữ liệu test tự động được lưu trữ trong hệ thống giúp đối tác dễ dàng theo dõi sản lượng, chất lượng sản phẩm. Bên cạnh đó phân tích dữ liệu giúp tối ưu sản xuất và chất lượng sản phẩm. Thống kê xác định rủi ro sản phẩm.
