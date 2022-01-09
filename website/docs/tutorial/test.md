---
id: test
title: Kiểm thử
---

## Stress test, Stable test

### Chuẩn bị

#### Tài khoản người dùng và thiết bị

Quá trình test khả năng chịu tải của hệ thống thông qua giao diện API http và giao diện giao tiếp MQTT.

Hệ thống hỗ trợ quá trình stress test và test hoạt động của hệ thống thông qua 2 API:

1. API khởi tạo tài khoản người dùng và tài khoản thiết bị:
  - Endpoint : /users-performance-test
  - Method : POST
  - Payload Data :
    - totalDevice (number): Số lượng tài khoản người dùng và thiết bị được tạo
    - deviceTypeId (string): Mã loại thiết bị cho thiết bị được tạo

2. API xóa tất cả tài khoản người dùng và tài khoản thiết bị (cùng dữ liệu lịch sử)
  - Endpoint : /users-performance-test
  - Method : DELETE

API Khởi tạo sẽ tạo 1 loạt các tài khoản người dùng với `username` bắt đầu với chuỗi `pft_u` theo sau là số thứ tự tài khoản, mật khẩu của tất cả các tài khoản sẽ là `mkpsmarthome`.

Tương ứng các tài khoản thiết bị được tạo sẽ có `productId` bắt đầu bằng `pft_d`, mật khẩu của các tài khoản thiết bị mặc định là `mkpsmarthome` (hoặc theo `defaultPassword` trong file cấu hình service `device-service`)

Các tài khoản người dụng được tạo ra có thể publish dữ liệu lên topic có cấu trúc `d/+/s/${username}/CP/#` và subcribe dữ liệu trong topic có cấu trúc `d/+/p/UP/#`. Điều này cho phép các tài khoản người dùng có thể nghe dữ liệu và gửi dữ liệu tới mọi tài khoản thiết bị.

#### Công cụ monitor server

Đề xuất có thể sử dụng netdata hoặc bất kỳ công cụ giám sát ghi log trạng thái hoạt động của server nào.

#### Công cụ Test

Người xây dựng kịch bản test sử dụng công cụ bất kỳ phục vụ cho quá trình kiểm thử tải trên giao diện API HTTP hoặc giao diện giao tiếp MQTT. Ví dụ `Jmeter`


### Thực hiện test

### Kết quả test nội bộ

Kết quả test do Makipos thực hiện trên máy chủ có cấu hình 2 CPU, 4 GB RAM. Sử dụng công cụ Jmeter (5.0) với  [plugin mqtt](https://cloud.makipos.net/s/2wHmpZS668tWMDs)

[File jmx](/pubsub_unidirection.jmx)

Kịch bản test:
1. Khởi tạo 5000 tài khoản (5000 thiết bị, 5000 người dùng)
2. Khởi tạo kết nối MQTT lên server (6 kết nối trên giây)
3. Mỗi tài khoản thiết bị publish dữ liệu lên 1 topic cụ thể với tấn suất trung bình 15 phút một bản tin . Tài khoản người dùng tương ứng subcribe vào topic của thiết bị tương ứng, xác nhận việc nhận dữ liệu thành công.

Kết quả :
 - Số bản tin lỗi 0%
 - Tình trạng server trong quá trình test :
![](/img/tutorial/cpu.png)
![](/img/tutorial/ram.png)
![](/img/tutorial/swap.png)
![](/img/tutorial/network.png)
![](/img/tutorial/disk.png)
![](/img/tutorial/device_event_by_time.png)
