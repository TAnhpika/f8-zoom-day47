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

## dark mode

- tự lắng nghe khi chuyển theme

## Variables

- khai báo ở theme (--color-pika-500)
- dùng:

* c1: text-(--color-pika-500)
* c2: text-pika-500

## Custom

- rounded-[50%]
- grid-cols: [1fr_500_2fr]
- hover:[mask-type:alpha]
- lg:[--scroll-offset: 44px]
- lg:[&:nth-child(-n+3)]:hover:underline
- bg-[url('/what_a_rush.png')]
- before:content-['hello\_world']

- thêm custom component vào @layer components{}

## Func & Directive

### Directive

- @import "tailwindcss";
- @theme {
  --font-display: "Satoshi", "sans-serif";
  --breakpoint-3xl: 120rem;
  --color-avocado-100: oklch(0.99 0 0);
  }
- @source: giúp import files - Tailwind k tự quét thấy
  @source "../node_modules/@my-company/ui-lib";

- @utility:
  +thêm 1 custom utility vào dự án
  @utility tab-4 {
  tab-size: 4;
  }

* có sẵn hover, focus, lg ... trong utility (còn import trong components thì k có)
* k đc ghi đè bởi các class mặc định của Tailwind vì cùng cấp

- @variant: định nghĩa lại tên biến
  @variant dark {
  background: black;
  }

- @apply đưa các tên class vào 1 biến (tránh lặp class). Tailwind gợi ý nên tách thành component lun

- @reference tới file css
  @reference "../../app.css";
  @reference "tailwindcss";

### Function

- --alpha(): adjust the opacity of a color:
  color: --alpha(var(--color-lime-300) / 50%);

- --spacing() function to generate a spacing value: margin: --spacing(4);

## group

Khi hover vào thẻ cha mà thẻ con thay đổi
