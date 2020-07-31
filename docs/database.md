---
title: Database
---

Nhằm mục đich xây dựng hệ thống IOT có khả năng lưu trữ xử lý dữ liệu lớn cùng với tốc độc truy xuất cao. Chúng tôi lựa chọn cơ sở dữ liệu chính là MongoDB với khả năng lưu trữ dữ liệu có cấu trúc linh động, dễ dàng thay đổi phù hợp cho nhiều mục đich và đối tượng, bên cạnh đó vẫn đáp ứng truy vấn tốc độ cao nhờ vào cơ chế hoạt động in memory.

Bên cạnh với cơ sở dữ liệu chính, Redis được sử dụng như bộ nhớ lưu trữ tạm thời và cho các tác vụ yêu cầu truy xuất và ghi dữ liệu thường xuyên, là bộ nhớ chia sẻ giữa các service. Mô hình này cho phép các service có thể tách nhỏ, hoạt động đồng thời song song mà vẫn đảm bảo tính nhất quán trong tiến trình hoạt động.

Ngoài ra bên cạnh các tác vụ truy xuất dữ liệu thông thường, những tác vụ yêu cầu các xử lý, phân tích dữ liệu lớn đặc thù có thể sử dụng kết hợp MongoDb với các cơ sở dữ liệu khác như elastic search thông qua cơ chế replica sử dụng [monstache](https://github.com/rwynn/monstache)

## [Mongodb](https://www.mongodb.com/)

Sử dụng như cơ sở dữ liệu chính. MongoDB có những đặc điểm thuận lợi cho một hệ thống IOT.
- Lưu trữ dữ liệu cấu trúc linh động.
- Hoạt động theo cụm phân chia tải ổ cứng.
- Sử dụng replica set để back up dữ liệu theo thời gian thực, đảm bảo độ an toàn và ổn định của hệ thống làm việc thường xuyên.

## [Redis](https://redis.io/)

Trong mô hình microservice redis phù hợp bởi mang những lợi thế cho phép
- Dễ dàng mở rộng hoạt động theo cụm.
- Có cơ chế lưu trữ dữ liệu trong ổ cứng, cho phép khôi phục làm việc nếu bị gián đoạn giữa chừng.
- Hỗ trợ nhiều kiểu dữ liệu.
- Cơ chế key expire

Do vậy chúng tôi sử dụng Redis
- API caching
- Lưu trữ dữ liệu cho các tác vụ cần truy suất, xử lý nhanh như dữ liệu đệm cho service thực hiện luật tự động ...
- Lưu trữ dữ liệu phân quyền cho các giao tiếp mqtt (sử dụng trực tiếp bới mqtt broker tăng tốc độ và hiệu năng cho các giao tiếp mqtt mà vẫn đảm bảo bảo mật chặt chẽ)
