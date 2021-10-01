---
  title: Truy cập Database
---

Database service được đặt trong mạng riêng ảo của docker swarm. Cấu hình mặc định không đưa kết nối database ra ngoài.

Để truy cập trực tiếp vào Database có 2 cách.

1. Mapping port kết nối tới database ra ngoài (yêu cầu khởi động lại database, chứa rủi ro bảo mật)

2. Tạo một service tiếp nhận kết nối ssh trong mạng riêng ảo. Sau đó kết nối tới database thông qua SSH tunel

  Bộ cài đặt đã cung cấp sẵn SSH service `ssh-server` (`docker-compose-ssh-server.yml`) để truy cập tới database trong quá trình khởi tạo ban đầu. Bạn có thể chạy lại service này bằng script `scriptdeploy/deploySSH.fish`.

  Port của SSH service được mặc định mapping tới port **2222** ở ngoài. Bạn có thể kết nối tới bằng tài khoản mặc định `root` với password mặc định `MKP123456a@`

  Để đảm bảo bảo mật. Sau khi hoàn thành thao tác với database. Bạn cần thiết tắt service SSH bằng script `scriptdeploy/undeploySSH.fish`

Bạn có thể tự thiết lập kết nối an toàn khác cho riêng mình bằng cách bổ sung vào mạng riêng ảo service của riêng bạn
