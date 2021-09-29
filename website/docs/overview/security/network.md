---
title: "Mạng kết nối"
---

![](/img/service_network2.png "kiến trúc")

Như đã trình bày tại mục [kiến trúc](architecture.md). Toàn bộ service được đặt trong mạng riêng nội bộ, và cụm máy chủ nằm trong 1 mạng vật lý riêng, đứng sau tường lửa (kiến trúc này được áp dụng với [CMC](https://cloud.cmctelecom.vn/))

Các kết nối truy cập SSH được bảo mật chỉ được truy cập sử dụng ssh key.
