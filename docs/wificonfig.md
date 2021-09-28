---
title: "Cài đặt wifi"
---

# 1 Giới thiệu
Quá trình cài cấu hình nhằm các mục đích:
* Mobile app gửi thông tin wifi (tên wifi, mật khẩu) cho thiết bị để kết nối internet.
* Mobile app gửi userId cho thiết bị. Thiết bị khai báo với server về user sở hữu. Server lưu lại để cấp quyền cho user.
* Mobile app gửi location hiện tại cho thiết bị. Thiết bị cập nhật location lên server. Location cuối cùng được cài đặt được hiểu là vị trí hiện tại của thiết bị.
# 2 Các bước thực hiện với BLE
* Device name: MKP-DeviceId   VD: MKP-AIO000001084.
* BLE GATT bao gồm 1 service chứa 2 character.

| Tham số | Giá trị UUID | Ý nghĩa |
| -------- | -------- | -------- |
| GATT SERVICE UUID     | 0x12AB     |      |
| GATT CHAR UUID WIFI LIST     | 0xAB01     | Lưu danh sách wifi quét được trong giá trị của character. Các SSID được ngăn cách bởi ký tự 0x06 . Mobile app lấy thông tin bằng thao tác Read   |
| GATT CHAR UUID COM     | 0xAB02     |   Character cho phép giao tiếp giữa mobile app và gateway. Mobile app gửi lệnh bằng thao tác Write. Thiết bị gửi dữ liệu thông qua Notify. Mobile app phải đăng ký nhận Notify.   |

Các lệnh dưới đây được truyền trong character 0xAB02 .

## B1: Mobile app truyền thông tin wifi cho thiết bị

Cấu trúc:
```
_UWF:SSID<0x06>Password<0x04>
```

Vi dụ:
```
_UWF:Wifiname<0x06>123456<0x04>
```

Thiết bị gửi thông báo kết nối wifi thành công:  
```
Wifi_OK
```

Chú ý: hiện thiết bị chưa có cơ chế phát hiện kết nối thất bại. Mobile app tự xác định 1 khoảng thời gian (30s đến 1 phút) nếu thiết bị không trả về thanh công thì coi như thất bại.

## B2: Mobile app truyền thông tin location cho thiết bị
Cấu trúc:
```
_LOI: <long><0x06><lat><0x04>
```

Vi dụ:
```
_LOI: 105.7831197<0x06>21.0319133<0x04>
```

## B3: Mobile app truyền thông tin user ID cho thiết bị
Cấu trúc:
```
_UID:UserID<0x04>
```

Vi dụ:
```
_UID:123132abcd12ef<0x04>
```

Thiết bị trả về:  
| Kết quả | Ý nghĩa |
|---------|---------|
|User_OK|Thêm user thành công|
|User_EXIST|Thiết bị đã thuộc user từ trước|
|User_FALSE|Lỗi khác|

## B4: Mobile app gửi lệnh kết thúc quá trình cài đặt
Sau khi nhận được phản hồi từ B3
Cấu trúc:
```
_END:<0x04>
```
