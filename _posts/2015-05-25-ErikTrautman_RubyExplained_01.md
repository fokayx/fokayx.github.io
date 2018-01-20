---
layout: post
title: Ruby Explained - Numbers, Operators and Expressions @ErikTrautman
tag: [Ruby]
---

## 數字、運算子、表達式

[Ruby Explained - Numbers, Operators and Expressions](http://www.eriktrautman.com/posts/ruby-explained-numbers-operators-and-expressions)

使用Ruby進行數學運算的時候，運算的結果會和輸入數值的類型相同。也就是說如果以2個整數相除，相除的結果也會是整數。

```ruby
> 5 / 3
> => 1
```

為了修正這個結果，你必須讓其中一個數值是可以有小數點的類型，例如浮點數 (float)。

```ruby
> 5.0 / 3
=> 1.666666666666667
# 只要其中一個是浮點數，運算的結果就會是浮點數。
```

整數 (integer) 和浮點數 (float) 間的轉換非常容易，只要使用 `to_i` 或者 `to_f`，就可以進行轉換。

```ruby
> 5.20610.to_i
=> 5
> 5.to_f
=> 5.0
```

因為 Ruby 是一個非常彈性的語言，他讓你能做些古怪的事，一些你覺得應該可以但從未預期真的可以這麼做的事，例如：讓 2 種完全不同類型的資料相乘。

```ruby
> "hi" * 3
=> "hihihi"
```

用變數同樣可以執行這種方式的運算：

```ruby
> my_word = "howdy"
=> "howdy"
> my_word * 3
=> "howdyhowdyhowdy"
```


範圍 (Range) 是一個連續的序列，可以用一個簡寫的方式來表示，例如我們想表達 `3, 4, 5, 6, 7, 8, 9, 10, 11` 這一串數字，只要寫成 `(3..11)`，即是指 3 到 11 中間的所有整數，包含 3 跟 11。如果是寫成 `(3...11)` 則會不包含 11。

另外也可以使用 `Range.new(start, finish)` 表示，但在慣例上會使用簡寫的方法。

關於 "="

`=` 用於指定任務，像是指定一個變數的值：

```ruby
> name = "Erik"
```

`==` 用於檢查 2 個不同的實例是否相等。會常常用在有條件的情況下，
當創造了自己的類別 (例如："Animal" 類別)，
例如你創造了一個類別 ("Animal")，你得告訴 Ruby 如何按照你寫的方清去比較 2 個動物實體。`===` 三個 "=" 通常是指右邊的物件是不是屬於左邊的物件之一，例如：3 是不是屬於 (1..4) 的範圍內呢?

```ruby
> (1..4) === 3
=> true
```

同樣可以作用於確認該物件是否屬於某類別：

```ruby
> Integer === 3
=> true
```

- - -

Ruby Explained 是用 "In-Plain-Engilish" 來介紹 Ruby 的核心概念，這些概念也常見於其他的介紹中，不過在 Erik Trautman 這裡是免費而且儘量的淺顯易懂。

Erik Trautman 說自己在學習新東西的時候，他希望有人能把他當做五歲小孩，為他進行解釋，Erik 認為這樣是最好的學習方法，而且能避免錯失任何東西。

翻譯：Translate from [Erik Trautman](http://www.eriktrautman.com/)
