# Tin học Thức Nguyễn EDU

```
frontend/   React (Vite) – trang chủ, build bằng Docker → nginx
backend/    placeholder
```

## Chạy bằng Docker

```bash
docker compose up --build
# mở http://localhost:8080
```

## Phát triển frontend (cần Node 26, dùng `nvm use`)

```bash
cd frontend && nvm use
npm install
npm run dev      # http://localhost:5173
```

Nội dung (khóa học, lịch khai giảng, học liệu, liên hệ) nằm tại `frontend/src/data.js`.
