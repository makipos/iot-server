---
title: Chức năng
---

| Chức năng | Mô tả |
|-----------|-------|
| Quản lý tài khoản người dùng | Lưu trữ thông tin tài khoản của người dùng |
| Đăng ký đăng nhập | - Sử dụng tài khoản, mật khẩu <br> - Sử dụng google <br> - Sử dụng facebook <br> - Sử dụng apple signin |
| Lịch sử thao tác người dùng | Mọi cuộc gọi API của người dùng được ghi lại |
| Phản hồi từ người dùng | Ghi nhận lưu trữ phản hồi từ người dùng thông qua ứng dụng |
| Chặn, khóa tài khoản người dùng | |
| Quản lý thuộc tính thiết bị IOT <br> (Thêm, sửa, xóa) | - Tên, mã thuộc tính <br> - Tên, icon hiển thị <br> - Kiểu, khoảng giá trị, đơn vị <br> - Tùy chỉnh thông báo cho từng khoảng giá trị|
| Quản lý kiểu thiết bị <br> (Thêm, sửa, xóa) | - Tên loại thiết bị <br> - Tên, hình ảnh hiển thị <br> - Danh sách các thuộc tính của loại thiết bị |
| Quản lý tài khoản thiết bị <br> (Thêm, sửa, xóa) | - Mã, mật khẩu thiết bị <br> - Loại thiết bị <br> - Vị trí, ip của thiết bị <br> - Mã phiên bản phần cứng phần mềm <br> - Giá trị của các thuộc tính hiện tại <br> - Trạng thái hệ thống của thiết bị (sản xuất, lưu trữ, đang sử dụng, bảo hành ...) <br> - Thời điểm người dùng kích hoạt sử dụng thiết bị|
| Đặt lịch hẹn giờ cho thiết bị | - Được người sử dụng tạo trên ứng dụng, thiết bị định kỳ lấy dữ liệu hẹn giờ từ trên server và đặt lịch thực hiện |
| Lịch sử thiết bị | - Lưu trữ lại mọi hoạt động của thiết bị, bao gồm trạng thái kết nối, cập nhật dữ liệu thuộc tính, hành động gọi API |
| Quản lý quyền sở hữu <br> (Thêm, xóa)| - Cấp, thu hồi quyền sử dụng của tài khoản người dùng đối với tài khoản thiết bị (có quyền đọc dữ liệu trạng thái, gửi lệnh điều khiển thiết bị) <br> - Có 3 cấp độ sở hữu của người dùng đối với thiết bị : admin, manager và user <br> Một thiết bị chỉ có 1 admin và người có quyền cao hơn có thể chia sẻ cho người dùng khác |
| Kịch bản người dùng | Người dùng tạo trên ứng dụng nhóm các lệnh điều khiển nhóm thiết bị vào 1 thao tác nhanh |
| Luật tự động | Người dùng tạo trên ứng dụng luật điều kiện theo dạng if (... and ...) then () hoặc if (... or ...) then <br> Luật tự động này được thực hiện bởi server, do vậy cần duy trì kết nối liên tục giữa thiết bị và server <br> Danh sách điều kiện : trạng thái thiết bị, thời gian trong ngày, trễ thời gian <br> Danh sách hành động : điều khiển thiết bị, thông báo notify, kích hoạt kịch bản, kích hoạt hủy kích hoạt luật tự động |
| Hỗ trợ đa giao thức kết nối và điều khiển thiết bị | - Thiết bị có thể kết nối thông qua (mqtt,ssl,ws,wss,http,https,tcp,sms) <br> - Điều khiển thiết bị thông qua (http, https, mqtt, wss) |
| Liên kết thiết bị với google assistant | Các thiết bị tương ứng được liên kết với google assistant |
| Update OTA cho thiết bị <br> (Thêm, xóa) |  |
| Quản lý lịch sử sản xuất thiết bị ||
