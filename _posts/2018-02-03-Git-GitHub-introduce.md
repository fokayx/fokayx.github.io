---
layout: post
title: 你今天 Git 了嗎？
tag: [Git, GitHub]
feature-img: "assets/img/2018/02-03/git.png"
thumbnail: "assets/img/thumbnails/2018/02_03_git.png"
---
## Git 版本控制系統

Git 是由 Linux 的核心開發者 Linus Torvalds 為了管理 Linux 核心程式碼，在 2005 年所開發出來的版本控制系統 (Version Control System)。

什麼是版本控制系統呢？版本控制是用來紀錄每一個版本間檔案內容所產生的差異，不管是檔案的新增、編輯、修改、刪除版本控制都會幫你紀錄下來，可以很清楚知道紀錄的每個檔案在每個版本間發生的變化，開發的過程隨時可以切換到任何一個版本，檔案就會變成當時紀錄的狀態。

版本有點像是打電動裡面的紀錄檔，幫你紀錄當時的裝備、技能等等，如果不小心被大魔王打死損失裝備，或是好不容易打死大魔王卻沒有撿到理想的裝備，都可以讀取紀錄重來一次。

Git 是免費、開源的版本控制應用，版本切換快、檔案體積小，不用網路也可以無痛使用，應該是目前最流行的版本控制系統。在使用版本控制共同開發的時候，每個版本除了紀錄檔案也會紀錄是誰做了這次的版本，這樣要是發生檔案被覆蓋或刪除，不小心弄壞專案的時候，查看版本紀錄就能輕鬆找出凶手是誰和究竟發生了什麼事，然後只要幾個指令就能讓專案完好如初。如果你的工作是對一堆電腦檔案進行資料處理的話，非常適合使用 Git 幫你作版本控制進行工作紀錄。

## 可以給我你的 GitHub 帳號嗎？

![github_Octocat](/assets/img/2018/02-03/Octocat.jpg)

那個也很常聽到的 GitHub 又是個什麼玩意兒？GitHub 是一個可以使用 Git 版本控制和整合多人協同開發的程式碼託管平台，透過 GitHub 的雲端服務，開發者們可以在任何地方和任何人進行專案合作。因為上面會有工程師們的開發紀錄，偶爾在面試的時候會被要求提供 GitHub 帳號，從上面能對工程師的程式實力、工作情況窺知一二。

放在 GitHub 的專案如果沒有付費都是屬於公開的狀態，會員如果覺得這個專案不錯的話可以按星星，等於是臉書的貼文按讚，當你看到一個專案的星星數越多，表示這個專案的內容有相當程度的品質保証，所以 GitHub 也被戲稱為工程師的 Facebook。

## 安裝 Git

終於要說到如何開始使用 Git 了，[Git] 的官網有各個作業系統的下載連結，下載完之後點開下載檔案的檔案，一步步跟著執行就可以完成 Git 安裝。

如果無法順利安裝的話，在[為你自己學 Git] 這邊有詳盡的安裝說明可以參考：

- [Windows]
- [Mac OSX]
- [Linux]

為你自己學 Git 是五倍紅寶石[高見龍]大大寫的 Git 工具書，有免費的網路電子書版也有要付錢錢的印刷實體書版，裡面囉囉嗦嗦對 Git 有相當完整而清楚的介紹，除了 Git 的基本原理和操作詳解，還有針對許多開發過程中會遇到的狀況作說明，不論是已經在使用 Git 的人，還是完全的初心者都是非常推薦的一本參考書。另外龍哥也有在五倍紅寶石學院提供線上課程[人生不能重來，但 GIT 可以]可以進行觀摩學習。

哪裡買傳送門：

- [天瓏書局]
- [博客來]

[Git]: https://git-scm.com/downloads
[為你自己學 Git]: https://gitbook.tw/
[Windows]: https://gitbook.tw/chapters/environment/install-git-in-windows.html
[Mac OSX]: https://gitbook.tw/chapters/environment/install-git-in-mac.html
[Linux]: https://gitbook.tw/chapters/environment/install-git-in-linux.html
[高見龍]: https://kaochenlong.com/
[天瓏書局]: https://www.tenlong.com.tw/products/9789864342662
[博客來]: http://www.books.com.tw/products/0010771986
[人生不能重來，但 GIT 可以]: https://campus.5xruby.tw/p/git
