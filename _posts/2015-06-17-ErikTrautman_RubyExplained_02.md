---
layout: post
title: Ruby Explained - Objects and Methods @Erik Trautman
tag: [Ruby]
---

### 物件與方法
[Ruby Explained: Objects and Methods](http://www.eriktrautman.com/posts/ruby-explained-objects-and-methods)

"Everything in Ruby is an Object" is something you'll hear rather frequently. "Pretty much everything else is a method" could also be said.

Ruby 所有東西都是物件，也可以這麼說，幾乎一切都是方法。

今天的目標是能初步了解 Ruby 的核心概念。在 `Ruby` 中所有東西都是物件，每一個物件都有一個類別，每個類別則付予給物件許多方法，可以用來做點什麼事，或者問些問題。物件導向 (object-oriented) 給予 Ruby 超乎想像的權力，讓程式人員的人生輕鬆許多。

思考一下：在 Ruby 中的任何"東西"，不只是眼睛所看到的那樣，例如數字 "12"，對 Ruby 來說 "12" 除了是個數字，他還是個物件，能讓你做許多有趣的操作，例如進行加減乘除或者問他問題：

```ruby
> 12.class
=> Fixnum

> 12.integer?
=> true

> 12 + 3
=> 15
```

Ruby 賦予所有物件 (Objects) 一大串的方法 (Methods)，方法的呼叫是：`物件.方法名 (object.methodname)`，例如：使用 `methods` 這個方法，就能取得所有和該物件有關的方法。

```ruby
> 12345.methods
=> #就會回傳 "12345" 這個物件能使用的所有方法
```

"12345" 的所有方法中也包含基本的運算符號 `+、-、*、/`，所以原本也得寫成 `12345.+123` 或者 `12345./5`，感覺有點囉嗦，還好 Ruby 做了簡化，使用基本運算符號可以省略 "."，直接輸入 `12345+123` 也是可以運行的。

有些屬於檢查是否/真假 (true/false) 的方法，通常會在方法名最後加上一個問號 (?)，例如：`is_a?`，這個方法是用於檢查該物件是否是某個類型。`::class` 則會告訴你該物件屬於何種類別 (class)：

```ruby
> 1.is_a?Integer
=> true   # 1 是整數嗎?
> "hihi".is_a?Integer
=> false
> "hihi".is_a?String
=>true   # "hihi" 是字串嗎?

> 12.class
=> Fixnum
> 1.2.class
=> Float
> "hihi".class
=> String
```

像 `is_a?`、`::class` 這一類會直接回覆給你關於物件本身訊息的方法，稱為反映式方法 (Reflection Methods)。

- 方法 (Method) 是什麼?

方法就是一些函數指令，也可以當他是個黑箱，你把左邊的東西放進去，搖一搖，然後右邊就會跑出些東西來。每一個方法都會回傳點什麼，就算是沒東西，也會跟你說聲這是 `nil`。

有些方法的"副作用"比他回傳的結果要有用的許多，例如：`puts`，當你在 `IRB` 中輸入 `puts "hi"`，這個 `puts` 方法會先產生副作用：印出輸入的`字串 ("hi")`，最後再回傳 `=> nil`。

```ruby
> puts"hi"
hi
=> nil
```

當你在寫自己的方法時，假如你忘記考慮回傳的狀態，很有可能會得到奇怪的結果，所以一定要很清楚自己現在寫了什麼程式碼，然後會輸出什麼回傳結果。

方法 (Methods) 是允許接受傳入值 (inputs)，在方法右邊的小括號可以被省略，如：`puts("hi")`可以寫成 ` puts"hi"`，只要你知道自己在寫什麼，把這些省起來是 ok 的。

`1+2 == 3` 意思是 1+2 是否會等於 3，也就是會不會回傳 "true"，最明確的寫法是 `1.+(2).==(3)`。

上面那個例子同時適用於`方法鏈接 (Method Chaining)`，就是你串連一堆方法的時候，會先執行左邊的方法，回傳的結果再和右邊的比對，以剛剛的例子 `1+2 == 3` 來說，先運算左邊的 `1+2 = 3`，然後再比對左右兩邊 `3 == 3` 是否為真 ( true)。這種模式就可以讓你優雅地將數行程式碼串接在一起。

- Bang Methods(Methods!)

Bang Methods 是指 `!` 結尾的方法，使用之後會直接更改原物件的值，如：`sort!`。驚嘆號是要警告提醒你注意：你正在危險的範圍中, 必須小心使用。記住當你在 IRB 中使用一個普通的方法，會回傳一個結果，並保留原本的物件，但是 Bang Methods 會覆寫原本的物件，具有不可逆的破壞性。

```ruby
> my_numbers = [1, 5, 3, 2]
=> [1, 5, 3, 2]
> my_numbers.sort
=> [1, 2, 3, 5]
> my_numbers
=> [1, 5, 3, 2]
# 仍維持原物件的值

> my_numbers.sort!
=> [1, 2, 3, 5]
> my_numbers
=> [1, 2, 3, 5]
# my_numbers 已被 sort! 方法所覆寫
```

方法若以 "?" 做結尾，則會回傳 true 或 false。那麼，究竟這些個方法是打哪兒來的呢?

答案就是：類別 (Class)，類別像是一把保護傘，賦予物件在該類別下所有的通用方法，舉例來說：你(對就是你本人)是 `Person` 這個類別的實體，你從 `Person` 繼承了許多的行為方法，例如：#笑、#走、#說話…等等。

這個在程式中非常有用，因為常常會需要創造某個類別的實體，如果每次都要重複寫同樣的那些方法，感覺就有點蠢。所以將方法寫在類別之中，那麼這個類別下的所有實體就會繼承這些方法。此外`類別 (class) `本身也可以進行繼承。例如：`Person` 這個類別有許多方法，但其中有些方法是繼承至 `Mamal` 類別或者 `LivingThing` 類別，你可以使用任何來自於上一代的方法。

在 Ruby 中試試看一個有趣的練習：使用 `::superclass` 查問類別的上一代是什麼?如果一直往上追問，會發現所有東西都繼承於 `BasicObject`，`BasicObject` 是大多數方法裡的初始物件。

```ruby
> 1.class.superclass.superclass.superclass.superclass
=> BasicObject
> BasicObject.methods
=> # giant list of methods 一大票方法
```

`::methods` 方法使用在類別上，會回傳所有的類別方法，而 `::instance_methods` 則會回傳該類別實體的所有方法，例如：

```ruby
"hello".methods = String.instance_methods
# "hello" 是字串 (String) 這個類別的實體所以和 String.instance_methods 相等，不等於下面：
# String.methods
```

`object_id` 可查看物件的 id，…有時候可能會出現奇怪的錯誤，例如：你修改了某個物件，但`他`卻沒有變動，這時候你可以試著查看`他`的 id，可能就會發現你修改的只是該物件的山寨版。

試著寫下你自己的方法，你可以任意的給輸入值命名，語法像這樣：` def methodname(argument1, argument2)`，(參數) 的括號是可以省略的，每個方法絕對會回傳一個 `return` 的狀態，或者最後一段程式碼的運行結果。

在 IRB 中你也可以直接寫方法，他會自動偵測出你是否尚未完成語法指令，例如：只有寫了 `def` 開頭，還沒有給一個 `end` 的結尾，或者是括號沒有成對。

```ruby
> def speak(words)
>   puts words
>   return true
> end
=> nil   # ignore this
> speak("hello!")
hello!
=> true
```

輸入值能不能什麼都沒有是個空值呢?要是方法中需要個輸入值 (inputs)，但卻什麼都沒有怎麼辦呢?很簡單，只要先指派好預設值，一切就沒問題。

```ruby
> def speak(words="shhhh")
>   puts words
> end   # implicitly returns what puts returns... nil!
=> nil   # ignore this
> speak   # no input
shhhh
=> nil
```

- - -

Ruby Explained 是用 "In-Plain-Engilish" 來介紹 Ruby 的核心概念，這些概念也常見於其他的介紹中，不過在 Erik Trautman 這裡是免費而且儘量的淺顯易懂。

Erik Trautman 說自己在學習新東西的時候，他希望有人能把他當做五歲小孩，為他進行解釋，Erik 認為這樣是最好的學習方法，而且能避免錯失任何東西。

翻譯：Translate from [Erik Trautman](http://www.eriktrautman.com/)
