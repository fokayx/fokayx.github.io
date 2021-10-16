---
layout: post
title: Cloudflare DNS 設定
tag: [cloudflare, gandi, dns, ssl]
---

使用 Cloudflare DNS 服務目前已有自動設定精靈，點一點就可以自動完成初步設定，接下來到網域註冊管理網站 (EX：Gandi) 更換你的網域外部名稱伺服器 ( Nameservers)，將原有的值換成 cloudflare 提供的值：

|Type|Value|
|-----|-----|
|NS 	|michelle.ns.cloudflare.com|
|NS   |nitin.ns.cloudflare.com|

![cloudflare_nameservers](/assets/img/2021/10_15/cloudflare_nameservers.jpg)

儲存設定之後可能要 12~24 小時才能生效。

設定完成之後連結網頁如果瀏覽器跑出 `ERR_TOO_MANY_REDIRECTS` 畫面：

![err_too_many_redirects](/assets/img/2021/10_15/err_too_many_redirects.jpg)

可以試著到 cloudflare 將 SSL/TLS 加密模式從彈性 (flexible) 改為完整 (full) 即可解決。

![cloudflare_ssl](/assets/img/2021/10_15/cloudflare_ssl.jpg)

Ref：

- [Heroku custom domains on Cloudflare: Too many redirects](https://stackoverflow.com/questions/31721754/heroku-custom-domains-on-cloudflare-too-many-redirects)
