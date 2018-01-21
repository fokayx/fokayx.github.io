---
layout: post
title: 絕世好 Vim：舒爽地編輯 Markdown 文件
feature-img: "assets/img/2018/01-21/hhkb_bear.jpg"
thumbnail: "assets/img/thumbnails/2018/01_21_hhkb_bear.jpg"
tag: [Vim, Markdown]
---
Markdown 是一種輕量級的標記式語言，目標是使用易讀易寫的純文字標記編寫文件，然後能轉換成有效的 XHTML (或 HTML) 網頁文件，2004 年推出之後在編輯網頁文件、撰寫電子書等方面獲得一定程度的愛戴。在 MAC 上也有許多支援 Markdown 語法和即時預覽的編輯器，有的還提供預覽樣版、文件管理、匯出 PDF 、部落格系統關連等附加功能：

- [Atom: Markdown Preview Package](https://github.com/atom/markdown-preview)
- [MacDown](http://macdown.uranusjr.com/)
- [Mou](http://25.io/mou/)
- [Sublime Text: Markdown Preview](https://github.com/revolunet/sublimetext-markdown-preview)
- [Typora](https://link.zhihu.com/?target=http%3A//typora.io)

Markdown 一方面也獲得工程師們某種程度的喜愛，不用另外開軟體可以直接用文字編輯器編輯文件，只要用簡單的文字符號就可以對文件內容進行樣式的設定，用了一陣子真心覺得非常簡單方便好好用。而我在不小心能用 Vim 打字之後，在各種輸入文字的時候都會不小心用上 Vim 的習慣，例如打完收工要存檔會出現 `:wq` 或者想要移動會出現 `hjkl` 之類的情形，在 Vim 裡面沒問題，在別的編輯器就會直接硬生生的打上字，不但沒有想要效果，還多打了字需要刪除，其實造成不少的困擾。

所以雖然上面有幾個看起來不錯 Markdown 編輯器，實際用起來就是卡卡的，而且在大部份的編輯器中想要在文件內移動、複製之類的，手就必須離開鍵盤使用滑鼠操作，身為一把懶骨頭覺得既然是純文字工作，最好是用鍵盤就能完成所有的事情。Google 一下 Vim 也有許多支援 Markdown 的套件，接下來就介紹 2 個 Vim 的 Markdown 擴充套件：提供 Markdown 語法 Highlight 的 [Vim Markdown] 和即時預覽編輯結果的 [vim-instant-markdown]。

## Vim Markdown

[Vim Markdown] 主要提供 Markdown 語法 Highlight 和一些 Markdown 相關的拓展功能。

### 安裝

- 使用 [Vundle] 的安裝方法，將下列加到你的 `~/.vimrc` 中

```
Plugin 'godlygeek/tabular'
Plugin 'plasticboy/vim-markdown'
```
然後在 Vim 裡面的命令列執行
```
:so ~/.vimrc
:PluginInstall
```

- 使用 [Pathogen] 的安裝方法

```
cd ~/.vim/bundel
git clone https://github.com/plasticboy/vim-markdown.git
```

- 使用 [Debian vim-addon-manager] 的安裝方法

```
git clone https://github.com/plasticboy/vim-markdown.git
cd vim-markdown
sudo make install
vim-addon-manager install markdown
```
- 什麼套件管理套件都沒有用，純純 Vim 的安裝方法

```
cd ~/.vim
tar --strip=1 -zxf vim-markdown-master.tar.gz
```

### 功能設定選項

以下的設定都是添加在你的 `.vimrc` 檔案中,

  > 如果你一開始 Vim 的設定是使用高見龍大大的 [eddie-vim2] 設定的話，就是將待會介紹的設定加到：
  >
  > `～／.vim/plugin/settings/settings.vim`
  >
  > 想要另外開一個檔案存放設定也可以，例如：vim-markdown.vim，一樣是放在
  >
  > `～／.vim/plugin/settings/` 目錄下。

#### 停用預設快捷鍵設定

`let g:vim_markdown_no_default_key_mappings = 1`

#### TOC (Table of Content) 視窗自動調整大小

TOC 通常是指目錄，這邊是會把所有文件中的 header (h1~h6) 標記的標題另開一個視窗列出來，預設這個視窗大小是原本編輯視窗的一半，啟用這個設定之後，TOC  視窗尺寸會從原本的一半根據標題的最大字數自動縮減：

`let g:vim_markdown_toc_autofit = 1`

#### 程式碼區塊語法 highlight

程式碼區塊可以加上程式的名稱進行區塊內語法 highlight 的判別，通常會使用副檔名做為程式語言的簡稱，也可以自訂不同的單字，不過自訂單字似乎只有在 Vim 裡面有看到 highlight 效果 (?)

```rb
  def hello
    puts '5xruby'
  end

  Example:
  let g:vim_markdown_fenced_languages = ['5xruby=ruby']

  #```5xruby
  #  def hello
  #    puts '5xruby
  #  end
  #```
```

#### 語法支援擴充 Syntax extensions

- LaTeX math

`let g:vim_markdown_math = 1`
- YAML Front Matter

`let g:vim_markdown_frontmatter = 1`
- TOML Front Matter

TOML 語法 highlight 還要另加 [vim-toml] 套件支援。

`let g:vim_markdown_toml_frontmatter = 1`
- JSON Front Matter

JSON 語法 highlight 還要另加 [vim-json] 套件支援。

`let g:vim_markdown_json_frontmatter = 1`

#### 調整項目列表的縮排空格

使用項目列表時，如果要再增加一個子列表，vim-markdown 會自動插入 4 個空格的縮排，使用下面的設定可以調整空格數，例如 2 格空格：

`let g:vim_markdown_new_list_item_indent = 2`

### 快捷 Mapping

- `]]` : 前往下一個 header
- `[[` : 前往上一個 header
- `][` : 前往上一個同層級 header
- `[]` : 前往下一個同層級 header
- `]c` : 前往目前所在段落的 header
- `]u` : 前往目前所在段落的母層級 header，也就是在 h3 段落中會跳到所屬的 h2 header

### 功能指令 Commands

在 Vim 裡面的命令列模式或者可視模式輸入指令，必須先啟用 `:filetype plug on`

- `:HeaderDecrease`

將所有標題各升一級，例如 h2 -> h1，在文件中已有設定 h1 的時候無法使用。如果有選取文件中的範圍，就只會作用在該選取範圍內。
- `:HeaderIncrease`

將所有標題各降一級，例如 h3 -> h4，如果有設定 h6 會無法使用。
- `:Toc`

將視窗垂直切割顯示所有 header 的目錄列表，在任一 header 上按 `enter` 就可以直接跳至該標題。如果要跳到標題然後順便關閉 TOC 視窗，要再加上這行：

```
nnoremap <expr><enter> &ft=="qf" ? "<cr>:lcl<cr>" : (getpos(".")[2]==1 ? "i<cr><esc>": "i<cr><esc>l")
```
- `:Toch`

將視窗水平切割顯示所有 header 的目錄列表
- `:Toct`

另外開啟一個分頁顯示所有 header 的目錄列表

## Vim-instant-markdown

使用 Vim 打開 Markdown 文件編輯，[Vim-instant-markdown] 會立刻打開瀏覽器視窗，提供所見即所打的即時預覽，完成編輯儲存關閉檔案，也會順便關閉預覽視窗。

### 安裝與環境

- [node.js]
- npm -g install instant-markdown-d
- 如果你使用 Linux 系統，請確認下面的套件有安裝：
	- xdg-utils
	- curl
	- nodejs-legacy ( Debian-base 系統需要)

### 功能設定選項

Vim-instant-markdown 提供了一些功能的設定，可以將需要的設定加在 `.vimrc` 裡面。

#### 即時更新：

預設只要文件編輯就會即時更新瀏覽器畫面，不過這個功能會佔用較多的電腦效能，也能設定將即時更新關閉。

`let g:instant_markdown_slow = 1`

設定之後在以下情況預覽視窗才會進行更新：

- 一陣子沒有任何輸入
- 離開 insert mode
- 儲存檔案

#### 自動開啟預覽視窗：

預設為只要開啟 Markdown 文件就會自動開啟瀏覽器預覽。

`let g:instant_markdown_autostart = 1`

要在 Vim 的命令模式輸入 `InstantMarkdownPreview`，才會打開預覽視窗。

#### Script 動次動次：

因為安全性的考量，script 預設是被禁止的，設定之後才能讓 script 動起來。

`let g:instant_markdown_allow_unsafe_content = 1`

#### 限用外部內容資源：

預設外部資源沒有使用限制，如：圖片、stylesheets、frames、plugins，設定之後就可以禁用那些外部內容。

`let g:instant_markdown_allow_external_content = 0`

### 支援作業系統

- OSX
- Unix/ Linuxes: 目前開發者沒有一個靠譜的方式讓瀏覽在背景運作，所以每次開 Markdown 文件就必須重設一次 vim session。
- Windows: 如果沒有使用 `cmd.exe` 要非同步處理一些指令並不容易，所以如果沒有設定 `g:instant_markdown_slow` 在效能上 87% 會有問題。

-----------------------------------

日常的主要工作就是用電腦打打字，作業範圍只有眼前的螢幕和手邊的鍵盤，所以會蠻在意整個工作期間的舒適度，例如椅子的軟柔度、螢幕的角度與高度、鍵盤的打擊聲和手感、空氣的流動感、光線的溫度等等，各種眉眉角角都要協調服貼自己的小習慣才行，可以說是相當龜毛。除了工作環境的硬體之外，也會把各種開發上用到的工具軟體們調整成自己看得最順眼、用的最順手的樣子，例如終端機的配色、文字編輯器的套件等等，開始使用新工具之前大概都會先默默地設定一番。

每個工程師基本上都需要編輯器來輔助工作的進行，常會希望新的編輯器能保有在舊的使用習慣然後提供更多強大的功能，或者在開發新的技術會希望原有的工具們能夠有新的相關套件支援新的技能。一個值得投入的編輯器，除了本身預設的基本功能，彈性多元的客製設定，還需要與時俱進的擴展套件，Vim 的使用者多為程式工程師，阿宅們為了讓自己寫程式變得更舒爽，前前後後開發出各式各樣的擴充功能，讓 Vim 歷久彌新，新世代編輯器有的花俏功能，在 Vim 裡面應該也都能找到相關的套件來實現，一點也不會落伍遜色，歡迎大家一起來進行 Vim  的一個動作。:wq

[Vim Markdown]: https://github.com/plasticboy/vim-markdown
[vim-instant-markdown]: https://github.com/suan/vim-instant-markdown
[Vundle]: https://github.com/VundleVim/Vundle.vim
[Pathogen]: https://github.com/tpope/vim-pathogen
[Debian vim-addon-manager]: https://packages.qa.debian.org/v/vim-addon-manager.html
[eddie-vim2]: https://github.com/kaochenlong/eddie-vim2
[node.js]: https://nodejs.org/en/
[vim-toml]: https://github.com/cespare/vim-toml
[vim-json]: https://github.com/elzr/vim-json
