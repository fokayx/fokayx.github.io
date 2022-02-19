---
layout: post
title: TailwindCSS v3 Features
tag: [tailwindcss, css, jit]
feature-img: "assets/img/2022/02_19/tailwindcss_v3.jpg"
thumbnail: "assets/img/thumbnails/2022/02_19_tailwindcss_v3.jpg"
---

TailwindCSS v3 在 2021-12-10 發佈，新版本將帶來效能提昇、工作流程改善和許多新的功能：

- Just-in-Time, all the time：輕量且快速的 Just-in-Time 編譯引擎，大輻提昇效能
- Every color out of the box：預設包含所有擴充的顏色
- Colored box shadows：有顏色的陰影效果
- Scroll snap API：支援 scroll snap css style
- Multi-column layout：多欄式版面
- Native form control styling：客製設定 checkboxes, radio buttons, file inputs 樣式
- Print modifier：列印模式設定
- Modern aspect ratio API：元件寬高比設定
- Fancy underline styles：可設定底線的顏色，而且有多種樣式
- RTL and LTR modifiers： 文字書寫從左到右、從右到左，`rtl` 和 `ltr`
- Protrait and landscap modifiers：可依照直式螢幕和橫式螢幕做不同的設定
- Arbitrary properties：客製任意屬性，tailwind 未提供的 CSS 屬性也可以使用
  ```
    <div class="bg-[#bada55] text-[22px] before:content-['Festivus'] [mask-type:luminance]">
    <!-- ... -->
    </div>
  ```
- Play CDN：以 CDN 的方式使用 Tailwind CSS，適合拿來開發 demo，不建議用在 production 環境
- Tons of other utilities — 支援更多屬性 `touch-action`、 `will-change`、`flex-basis`、`text-indent`、`scroll-behavior`…

-------
### REF

- [TailwindCSS Github Release](https://github.com/tailwindlabs/tailwindcss/releases)
- [TailwindCSS v3.0 announcement](https://tailwindcss.com/blog/tailwindcss-v3)
