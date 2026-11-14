/* DEMO-CONFIG.JS — khai báo các sprite cần xem thử. Sửa file này (hoặc dán dòng hero-data ngay trên trang demo).
   file : đường dẫn ảnh, tính từ thư mục demo-tuong/        cw, ch : kích thước 1 khung (px)      n : số khung
   h    : chiều cao hiển thị trong trận (px) = "idle.h"      ms     : thời gian 1 vòng (ms) = "idle.ms"
   face : 'L' = ảnh gốc quay mặt sang TRÁI (mặc định), 'R' = quay sang PHẢI        mode : 'loop' (lặp) | 'once' (chạy 1 lần, như sprite tung chiêu) */
window.DEMO_HEROES = [
  { name: 'Pháp Sư Tím — đứng yên', file: 'heros/phap-su-tim/phap-su-tim-idle.webp', cw: 204, ch: 176, n: 20, h: 110, ms: 1600, face: 'L', mode: 'loop' }
];
