---
title: Domain
---

Hệ thống sử dụng 2 domain riêng biệt cho API và web service.

Các truy vấn sử dụng `WEB_DOMAIN` và entry point `80`, `443` sẽ được gateway rounting tới web service.

Các truy vấn tới entry point `3028`, `3029` sẽ được routing tới service tương ứng sử dụng cấu hình path trong `docker-compose` file với mỗi service tương ứng.

Cấu hình domain được đặt tập trung tại file `.envDeploy`

```
SERVICE_DOMAIN=localhost
WEB_DOMAIN=localhost
```
