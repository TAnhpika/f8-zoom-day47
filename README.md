# setup

- React compiler: giúp tự bọc useMemo, useCallback, reactMemo
- StrictMode: chạy lại 2 lần để check lỗi
- Dùng module.css để tránh các class bị trùng nhau.

- Vấn đề: mỗi lần tạo component sẽ cần tạo file index và file css -> tailwind giúp giải quyết đc

# Tailwind

- npm i tailwindcss @tailwindcss/vite

- ưu: sửa css trong jsx. k cần đặt tên class
- nhược: tên class dài
- k nên dùng chung vs css module vì ảnh hưởng hiệu năng (1 module tải lại 1 lần)

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

## Responsive

- prefix(tiền tố), vd: sm:flex-row từ màn small trở lên sẽ có css là flex-row
- dùng un-prefix để css cho mobile

### Quy tắc xây dựng class

- <property>-<value>
- value:

* số: 0, 0.5, 1,...
* chữ: xs, sm, md, lg, xl, 2xl,...

## Property

- h-dvh: dynamic viewport height
- custom: rounded-[50%]
- đặt biến ở @theme (--card-width)

- px-2 = pl-2 pr-2
- w-1/2: width 50%

## States

- hover:
- focus:
- active:

## responsive

- sm: md: lg: xl: 2xl:
- sm: (width >= 40rem)
- max-sm: (width < 40rem)

- md:max-xl: flex (48rem =< width < 80rem)

- custom breakpoint:
  @theme {
  --breakpoint-*: initial;
  --breakpoint-tablet: 40rem;
  --breakpoint-laptop: 64rem;
  --breakpoint-desktop: 80rem;
  }

- single custom: max-[600px]:text-pink-400

### @container

- đánh dấu phần tử làm container cha -> các phần tử con responsive dựa trên chiều rộng của container gần nhất
- @sm:text-red-600: áp dụng khi chiều rộng của container gần nhất đạt ít nhất 24rem
- @container/wrap: container là wrap
- @max-xl/wrap:text-fuchsia-500 : responsive dựa trên container wrap
