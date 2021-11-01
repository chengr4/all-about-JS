# All About Modules

## Concept of "Generatic" Module

1. 一個功能完整的「整體」的每一個「區塊(模組)」有著各自的功能


## First Module: IIFE

```javascript
(function(){
  // 一個獨立的 scope
})();
```

## Module Specification

![](https://i.imgur.com/6qNaq66.png)

### CommonJS

![](https://i.imgur.com/k6nCe0g.png)

- Advantage
    1. 不用擔心自己的程式碼被 global scope 影響
    2. 檔案分離明確
- Disadvantage
    1. CommonJS 不適合瀏覽器 (主要為伺服器端設計)

### AMD (Asynchronous Module Definition)

> Design for browsers

![](https://i.imgur.com/Tqsrfrr.png)

- `define()`: 用 return 的內容決定內容
- 用 `require([], callback)` 進行載入 => callback hell
- `data-main`: entry point

### UMD (Universal Module Definition)

希望 script 能同時跑在 server and browser

### ESM

> ES2015

#### Advantage

- 明確指定模組名稱
- 非同步載入 (?)
- 真正執行之前可以先被解析
    - 只留需要的元件，不需要的甩掉 (= Tree Shaking)
    - 常見的 bundler 都有 Tree Shaking 優化

#### Disadvantage

- ESM 不方便動態載入
    - 比如探索整個資料夾之後自動載入資料夾中的模組
- CommonJS 在 Node.js 上比較方便
    - ESM 有往 NJS 推，但至今還不算主流
        - 需要加 Flag 開啟 “實驗功能”
    - 要用 ESM 建議搭配 TypeScript
        - 可以 compile to CommonJS

## References

1. [avaScript 模組進化論 - 模組化的演進與實戰](https://hackmd.io/@JSDC-tw/2021conference/%2FWkLLTE_ARW-D5kEq98KJ3g)
