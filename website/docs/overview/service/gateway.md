---
title: Gateway
---

Bao gồm các service nhận kết nối từ thiết bị hoặc người dùng, phân phối truy vấn, cân bằng tải tới các service xử lý tác vụ.

## [Traefik](https://docs.traefik.io/) (HTTP gateway)

So với [NGINX](https://www.nginx.com/) Traefik được phát triển sau này có những tính năng hỗ trợ tối ưu để hoạt động cùng docker swarm cùng với hiệu năng cao. Cấu hình đơn giản và linh động.

Service auto discovery tự động tìm kiếm, kiểm tra độ sẵn sàng của các service dịch vụ, đảm bảo hoạt động API luôn ổn định, không bị ảnh hương gián đoạn bởi các quá trình cập nhật sửa chữa service, scale up, down.

Dự trù cho việc mở rộng hệ thống, chúng tôi lựa chọn Traefik hỗ trợ khả năng hoạt động chế độ cluster.

## [EMQTT](http://emqtt.io/) (MQTT gateway)

Opensource mqtt broker hiệu năng cao. Cung cấp nhiều giao diện phổ biến cho các ứng dụng IOT

Hỗ trợ khả năng phân quyền kết nối tới từng topic giúp cho quá trình bảo mật thuật tiện, không cần service trung gian kiểm duyệt các bản tin. Do vậy tốc độ truyền tải bản tin đạt hiệu năng cao nhất mà vẫn đảm bảo phân quyền chặt chẽ.

Cho phép tiếp nhận duy trì hơn 100000 kết nối trên một node. Đồng thời dễ dàng mở rộng tải bằng cơ chế [cluster](https://emqtt.io/docs/v2/cluster.html)
