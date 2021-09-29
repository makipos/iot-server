---
title: User
---

Service bao gồm 1 nhóm các service (endpoint) nhỏ hơn chịu trách nhiệm quản lý, lưu trữ thông tin của người dùng

## Đăng nhập

Hỗ trợ 3 phương thức xác thực, đăng nhập thông dụng.
1. Username, mật khẩu
2. Google
3. Apple
4. Facebook

## [Phân quyền](overview/security/http.md)

Mỗi người dùng trong hệ thống đều được xác định quyền hạn rõ ràng tới từng API.

## Thông báo

Thông báo tới người dùng android và ios thông qua firebase message.

## Phản hồi

Hỗ trợ người dùng dễ dàng hơn với service tiếp nhận lưu trữ phản hồi từ người dùng thông qua ứng dụng.

## Kịch bản

Người dùng có thể tự tạo kịch bản tác động, điều khiển lên nhiều thiết bị cùng một lúc, chỉ cần thông qua một lần gọi API

## Thời tiết

API thời tiết hỗ trợ bởi [openweathermap](https://openweathermap.org/api)

## Lịch sử thao tác

Hỗ trợ cho thao tác giám sát hệ thống phát hiện bất thường, hoặc phân tích hành vi người dùng để tới ưu phục vụ người dùng cũng như đảm bảm hệ thống hoạt động ổn định
