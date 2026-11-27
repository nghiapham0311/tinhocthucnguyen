# Ảnh của website

Ảnh được lấy từ **Google Drive**, không cần sửa code hay deploy lại khi thay ảnh.

- Logo: https://drive.google.com/drive/folders/1BlTjnVZt2-7uHcA5cLoeSedW6dOsxShs
- Ảnh lớp học (gồm các thư mục con): https://drive.google.com/drive/folders/1-jZzAmp1P9kTM7sViLU_2REb8W0NmqWU

Dịch vụ `drive-sync` (xem `docker-compose.yml`) đọc danh sách ảnh trong 2 thư mục này **5 phút/lần**
và ghi ra `/drive/images.json`. Website đọc file đó rồi nhúng ảnh từ Drive.
Thư mục phải để chế độ chia sẻ "Bất kỳ ai có đường liên kết đều xem được".

## Thay ảnh ở một vị trí

Đặt tên ảnh trên Drive **đúng tên vị trí** (đuôi file tùy ý, nằm ở thư mục nào trong 2 thư mục trên cũng được).
Ví dụ muốn đổi ảnh phòng máy: đổi tên ảnh mong muốn thành `phong-may.jpg`. Tối đa 5 phút sau web tự đổi.

| Tên vị trí | Dùng cho | Đang dùng mặc định |
|---|---|---|
| `logo` | Logo nền sáng | `logo-ngang.svg` |
| `logo-white` | Logo nền tối (footer, trang Chứng chỉ) | `logo-ngang-nen-toi.svg` |
| `poster-chieu-sinh` | Poster chiêu sinh | `09C4F108-….PNG` (Chiêu sinh tháng 12) |
| `lop-hoc-thuc-hanh` | Học viên thực hành tại lớp | `1K231M1SL_5K5PEV.JPG` |
| `phong-may` | Toàn cảnh phòng máy | `att.fUt5Saf….JPG` |
| `lop-hoc-1` | Lớp học với máy tính | `IMG_5684.HEIC` |
| `lop-hoc-2` | Sinh viên học buổi tối | `IMG_9945.JPG` |
| `be-hoc-may-tinh` | Bé học máy tính (trang Khóa học) | chưa có |
| `chung-chi-co-ban`, `chung-chi-nang-cao` | Ảnh chứng chỉ CNTT | chưa có |
| `icon-chuot`, `icon-ban-phim`, `icon-may-tinh`, `icon-word`, `icon-excel`, `icon-powerpoint` | Biểu tượng 256×256 | chưa có |

Vị trí chưa có ảnh sẽ hiện khung sọc ghi tên vị trí. Cấu hình nằm trong `src/images.js` (`SLOTS`).

## Chạy ở máy local

`npm run drive:sync` tải danh sách ảnh về `public/drive/images.json` (không commit file này).
File đặt trong thư mục này (`src/assets/images/<tên-vị-trí>.png`) được dùng khi Drive không có ảnh cho vị trí đó.
