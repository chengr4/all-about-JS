# Web Design 

![](https://i.imgur.com/XlyMd2P.png)

> 網頁設計是一個光譜，並非非黑即白

- MPA + CSR 靜態，多頁，單純把 JavaScript 套到網頁裡
- SPA + CSR AngularJS, React, Vue
- SSR
    - 全渲染
    - 只渲染一部分
- MPA + SSR = 傳統框架
    - Laravel
    - Django or Flask
    - Express.js
- SSR + SPA
    - Next.js
    - Nuxt.js
    - GatsbyJS

## 純 CSR 難以解決的問題

+ 跟動態資料相關
  
E.g. 

Blog 用 API 拿文章
    - SEO問題
    - 分享文章: open graph protocol => metadata `og` 多為動態資料
    
## 前往 SSR 的旅程

![](https://i.imgur.com/AXMf4Mi.png)

1. Reversed Proxy (on nginx, cloudflare worker)
    - 管理問題：很容易跟前後端衝突 (routing 會換)
2. [react-snap](https://github.com/stereobooster/react-snap) 幫你把網站先 Render 好並 Cache 起來
3. pre-render (netlify / prerender.io)

> 類似第一點
    - 很容易跟網站衝突
    - Advantage
        - 方便
    - Disadvantage
        - $$$
        - cache 時間長短很難抓
4. Hybrid
    * 先 SSR 再 CSR
    * 對 Rendering 有額外的優化
    * 但開發時要小心元件的使用


## 真正放棄 CSR 的理由
- 使用 CSR 要知道 client 登入狀態，必須先打一個 Request 到 server

## References

1. [窮途末路的 SPA，堅持 CSR 到放棄](https://hackmd.io/@JSDC-tw/2021conference/%2FdiH2dM4PRDOMwAl2XB9hJg)
