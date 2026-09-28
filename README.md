# setup

- React compiler: giúp tự bọc useMemo, useCallback, reactMemo
- StrictMode: chạy lại 2 lần để check lỗi
- Dùng module.css để tránh các class bị trùng nhau.

- Vấn đề: mỗi lần tạo component sẽ cần tạo file index và file css -> tailwind giúp giải quyết đc

# Tailwind

- npm i tailwindcss @tailwindcss/vite

- ưu: sửa css trong jsx. k cần đặt tên class
- nhược: tên class dài

## Tools

- Extension Tailwind CSS IntelliSense giúp gợi ý class

- Plugin: prettier-plugin-tailwindcss giúp sắp xếp tên class khi save
  npm install -D prettier prettier-plugin-tailwindcss

## Cách Tailwind CSS hoạt động vs Vite

- Tailwind quét toàn bộ dự án, tìm các utility classes rồi chuyển thành css

### Layer

- layer viết sau có độ ưu tiên cao hơn (kể cả css trc có dùng !important) =
- nếu custom thì viết trong layer components

---

(Next: có sẵn react, tailwind, routing, auth, import @/)

---
