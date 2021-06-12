# All-about-JS

All about JavaScript

+ [Object Oriented](/OO)
+ [High-order-functions&Arrays](/High-order-functions&Arrays)
+ [Generators](/Generators)

## Some notes

**What is a polyfill ?**

如果 forwards-compatibility issue 不是與新語法 (new syntax) 有關，而是因為 API method 太新，最常見的解決方案是為該缺少的 API method 在舊環境提供一個定義，這種 pattern 稱為 **polyfill** (aka "shim")。

例如：

```javascript
// getSomeRecords() returns us a promise for some
// data it will fetch
var pr = getSomeRecords();

// show the UI spinner while we get the data
startSpinner();

pr
.then(renderRecords)   // render if successful
.catch(showError)      // show an error if not
.finally(hideSpinner)  // always hide the spinner
```

`finally(..)` method 是 ES2019 feature，因此在 pre-ES2019 需要 polyfill。

> Transpilers like Babel typically detect which polyfills your code needs and provide them automatically for you. But occasionally you may need to include/define them explicitly, which works similar to the snippet we just looked at.

## 學習事項

### 初級

+ [ ] 知道組合寄生繼承，知道 class 繼承
+ [x] 知道怎麼創建類 function + class
+ [x] 知道 event loop 是什麼
+ [ ] 知道 Closure(閉包) 在實際場景中怎麼用，常見的坑
+ [x] 知道 module 是什麼，怎麼用
+ [ ] 掌握基礎 DS，比如 Stack, Tree，並了解這些 DS 計算機基礎中的作用
+ [ ] `forEach`, `map`, `reduce` etc.

### 中級

+ [ ] 知道 `class繼承` 與`組合寄生`繼承的差別，並能舉例說明。
+ [ ] 知道 `event loop` 原理，知道宏微任務，並且能從個人理解層面說出為什麼要區分。知道 node 和瀏覽器在實現 loop 時候的差別。
+ [ ] 能將繼承、作用域、閉包、模塊這些概念融匯貫通，並且結合實際例子說明這幾個概念怎樣結合在一起。
+ [ ] 能脫口而出2種以上設計模式的核心思想，並結合 `js` 語言特性舉例或口噴基礎實現。
+ [ ] 掌握一些基礎算法**核心思想**或簡單算法問題，比如排序，大數相加。

## References

1. [阿里前端面试指南，P6/P6+/P7的能力标准都在这儿了](https://zhuanlan.zhihu.com/p/143611353)
2. [You don't Know JS](https://github.com/getify/You-Dont-Know-JS)