# Backend (placeholder)

Chưa triển khai. Dự kiến cung cấp API cho:

- `POST /api/consultations` – nhận yêu cầu tư vấn từ form trang chủ
- `GET /api/schedules` – lịch khai giảng & học phí
- `GET /api/materials` – học liệu

Khi bắt đầu: thêm `Dockerfile` ở thư mục này, bỏ comment service `backend` trong
`docker-compose.yml` và block `/api/` trong `frontend/nginx.conf`.
