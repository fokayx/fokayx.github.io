---
layout: post
title: CSS：calc() 數值運算
tag: [CSS]
---
[calc()][0] 是一個 CSS function 作用於屬性設定是數值的時候可以進行加減乘除的運算，例如： `<length> 長度`、`<frequency> 頻率`、`<angle> 角度`、`<time> 時間`、`<number> 數字`或者是 `<integer> 整數`這幾個屬性值都可以使用 `calc()`。

```css
/* property: calc(expression) */
/* 屬性: calc(運算式) */
width: calc(100% - 50px);
```

## calc() 語法

calc() 這個 function 需要傳入 1 個加減乘除的運算式，在設定 `width`、`height` 這種 \<length\> 相關的屬性時， 在不同單位間也可以進行運算，如剛剛上面的範例：`width: calc(100% - 50px);`。calc() 的運算式一樣是按照先乘除後加減進行計算，如果需要進行複雜的運算，在 calc() 裡面也可以再加入括號 `()`，就可以設為括號先決裡面的先算。

- `+`：加
- `-`：減
- `*`：乘。其中一個運算參數必須是數字 (number)
- `/`：除。除數必須是數字，除數不可為零，會造成 HTML 解析錯誤。

必須注意在使用 + 和 - 的時候，在前後一定要加上空白，不然會被誤為是給了個負值。* 和 / 可以不用加，但為了格式統一方便和閱讀建議還是加一下。

```css
width: calc(50% + 8px)
/* 意思是 50% 的寬度 + 上 8px */
width: calc(50% + -8px)
/* 意思是 50% 的寬度 + 上 -8px，也等於 '50% - 8px' */
```

## Example 應用範例

### 定位

calc() 可以用來定位，如下面所設定的 CSS，就能作出一個滿版的藍色 banner 區塊有固定 40px 的邊距，也是一種將區塊置中的寫法。

```css
.banner {
  position: absolute;
  left: calc(40px);
  width: calc(100% - 80px);
  background-color: #6C92AF;
  padding: 6px 0;
  text-align: center;
  color: #FFF;
}
```

```html
<div class="banner">Hello banner/div>
```

<p data-height="265" data-theme-id="light" data-slug-hash="PEgoZq" data-default-tab="css,result" data-user="fokayx" data-embed-version="2" data-pen-title="CSS_calc" class="codepen">See the Pen <a href="https://codepen.io/fokayx/pen/PEgoZq/">CSS_calc</a> by fokayx (<a href="https://codepen.io/fokayx">@fokayx</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


### 根據父層容器尺寸自動調整尺寸

設定 width 或 height 屬性使用 calc() 計算的數字是 100% 的時候，會自動去抓父層容器的尺寸。例如：做 autocomplete 的時候，希望在輸入框下，出現和輸入框等寬的列表：

```css
.container {
  width: 30%;
}

input {
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;
  border-left: 2px solid #6c92af;
  border-right: 2px solid #6c92af;
  border-top: 2px solid #6c92af;
  border-bottom: 2px solid #6c92af;
}

ul {
  background-color: #6c92af;
  margin: 0;
  padding: 0;
  width: calc(100% + 1rem + 1rem + 2px + 2px);
  color: #FFF;
  list-style: none;
}
```

```html
<div class="container">
  <input placeholder='show item'/>
  <ul>
    <li>show item 1</li>
    <li>show item 2</li>
    <li>show item 3</li>
  </ul>
</div>
```

由於 CSS 在加上 border、padding 的時候都是從原本設定得尺寸再往外加，所以長出來的東西看起來的尺寸會比原本設定的 width 還要大，因此要做到 ul 和 input 等寬的結果，在 input 加上的 padding 和 border 在算 ul 的 width 的時候也要幫他算進去，所以 ul { width: calc(100% + 1rem + 1rem + 2px + 2px); } 指的是：符合父容器的 100% 寬度，加上 input 的 padding-left: 1rem 和 padding-right: 1rem，再加上 border-left: 2px 和 border-right: 2px。用 calc() 計算尺寸非常方便，即使不同單位也沒有問題。如：codepen 第一個區塊。

如果在 ul 有設定 border、padding，ul 自己也會長大，在 calc() 計算的時候就必須扣掉這部份，例如：codepen 第二個區塊。
```css
.container2 {
  width: 30%;
}

.container2 input {
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;
  border-left: 2px solid #6c92af;
  border-right: 2px solid #6c92af;
  border-top: 2px solid #6c92af;
  border-bottom: 2px solid #6c92af;
}

.container2 ul {
  background-color: #6c92af;
  margin: 0;
  padding: 0;
  border: 1px solid #212c35;
  width: calc(100% + 1px + 1px);
  color: #FFF;
  list-style: none;
}
```

```html
<div class="container2">
  <input placeholder='show item'/>
  <ul>
    <li>show item 1</li>
    <li>show item 2</li>
    <li>show item 3</li>
  </ul>
</div>
```

<p data-height="265" data-theme-id="light" data-slug-hash="JMqyyP" data-default-tab="css,result" data-user="fokayx" data-embed-version="2" data-pen-title="css_calc_ex2" class="codepen">See the Pen <a href="https://codepen.io/fokayx/pen/JMqyyP/">css_calc_ex2</a> by fokayx (<a href="https://codepen.io/fokayx">@fokayx</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>



### 將 calc() 巢狀包入 CSS 變數中

只要用括號 () 包好包滿，就可以無限次使用 calc() 方法，會一層一層從括號裡面計算出來。

```css
.foo {
  --widthA: 100px;
  --widthB: calc(var(--widthA) / 2);
  --widthC: calc(var(--widthB) / 2);
  width: var(--widthC);
}
```

在上面這段程式碼裡面展開所有變數之後 widthC 就等於：

`--widthC: calc( calc( 100px / 2) / 2)`

所以 .foo 的 width 最後算出來的值就是 25px。


[0]: https://developer.mozilla.org/zh-TW/docs/Web/CSS/calc 'calc at mdn'
