---
title: Gateway
---

Bao gồm các service nhận kết nối từ thiết bị hoặc người dùng, sau đó gửi tới API service tương ứng

## [Traefik](https://docs.traefik.io/)

So với [NGINX](https://www.nginx.com/) Traefik được phát triển sau này có những tính năng hỗ trợ tối ưu để hoạt động cùng docker swarm cùng với hiệu năng cao.

Service auto discovery cho phép người quản trị dễ dàng scale up, down service mà không cần phải cài đặt điều chỉnh lại gateway, tất cả đều được thực hiện tự động.

Gateway tự xác định service nào đang hoạt động hoặc không, service có bao nhiêu tiến trình song song để phân tải hợp lý.

## [EMQTT](http://emqtt.io/)

Opensource mqtt broker hiệu năng cao. Cho phép khả năng cấu hình làm việc theo cụm để tăng số lượng kết nối cùng lúc

## TCP

Hiện tại tcp socket gateway được thực hiện đơn giản bằng nodejs server, đủ để đáp ứng nhu cầu kết nối của số lượng các thiết bị tcp hiện tại.
