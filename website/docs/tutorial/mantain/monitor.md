---
  title: Giám sát
---

## Giám sát trạng thái máy chủ

#### Một số đề xuất

[Netdata](https://www.netdata.cloud/) : Giám sát thông số hệ thống

[Mongoops](https://www.mongodb.com/products/ops-manager)  : Backup, giám sát mongodb database

[Ossec](https://www.ossec.net/) : Giám sát, theo dõi nguy cơ tấn công hệ thống, phản ứng ngăn chặn tự động

[Jaeger](https://www.jaegertracing.io/) : Giám sát thống kê traefik gateway

## Giám sát trạng thái service

```script
docker service ls
```

```script
docker stats
```

## Kiểm tra file log trong quá trình hoạt động

Các file log của service được mặc định đặt ở [thư-mục-chứa-dữ-liệu](/docs/tutorial/folder_structure#cấu-trúc-thư-mục-chứa-dữ-liệu)
