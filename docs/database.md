---
title: Database
---

Các cơ sở dữ liệu của nền tàng sử dụng mongodb và resdis hoạt động như 1 service độc lập, dễ dàng điều chỉnh, cập nhật, mở rộng hoạt động thành cluster cho phép giải quyết vấn đề dung lượng lưu trữ, phân tải.

## Mongodb

Sử dụng [mongodb](https://www.mongodb.com/) để lưu trữ chính dữ liệu của hệ thống. Với khả năng lưu trữ linh động, dê dàng thay đổi, cập nhật cấu trúc cơ sở dữ liệu, phù hợp cho quá trình phát triển tính năng liên tục

## Redis

[Redis](https://redis.io/) là bộ nhớ lưu trữ trên ram, sử dụng cho mục đích
1. API caching
2. Lưu trữ dữ liệu cho các tác vụ cần truy suất, xử lý nhanh như dữ liệu đệm cho service thực hiện luật tự động ...
3. Lưu trữ dữ liệu phân quyền cho các giao tiếp mqtt (sử dụng trực tiếp bới mqtt broker tăng tốc độ và hiệu năng cho các giao tiếp mqtt)
