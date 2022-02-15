# All about JavaScript

+ [Object Oriented](./OO)
+ [High order functions & Arrays](./High-order-functions&Arrays)
+ [Generators](./Generators)
+ [this](./this)
+ [Scope and Closures](./ScopeAndClosures)
+ [Spread Syntax](./spread-syntax)
+ [Functional Programming](./Functional-Programming)
+ [Modules](./modules)
+ [About Memory](./memory)

## History of JS

| 時機點 | 事紀 | JS |
| ----- | ---- | -- |
| 1993 | 網頁問世 | 1995 JS 問世 |
| 1997 | .com 起飛 | JS 製作網頁元件 |
| 2000 | .com 泡沫 | ajax |
| 2005 |  Web2.0 | jQuery |
| 2008 | 微網誌 | node.js 問世 |
| 2009 | Smart phone, APP | RWD, 前端開始服務手機、平板 |
| 2013 | 相片/影片分享浪潮 | React, Vue, Angular |
| 2017 | APP 卸載朝 | PWA |

## Attributes

1. Dynamically typed (use `var` instead of `int, float, String...`)

## Value

Values = `object` + `primitive value`

Primitive value: strings, numbers, booleans, `null`, `defined`, `Symbol`

Object: **arrays**, objects, functions

> Primitive values are always assigned/passed as **value copies** in JS
>
> 

### `undefined` vs. `null`

+ Both are **primitive value**, and usually are used indicate absence of a value
+ It is safer and best to use only  `undefined` as the **single empty value**

### Value Type Determination

```javascript
typeof 42;                  // "number"
typeof "abc";               // "string"
typeof true;                // "boolean"
typeof undefined;           // "undefined"
typeof null;                // "object" -- oops, bug!
typeof { "a": 1 };          // "object"
typeof [1,2,3];             // "object"
typeof function hello(){};  // "function"
```

| WARNING:                                                     |
| ------------------------------------------------------------ |
| `typeof null` unfortunately returns `"object"` instead of the expected `"null"`. Also, `typeof` returns the specific `"function"` for functions, but not the expected `"array"` for arrays. |

## Comparisons

### `==` vs. `===`

+ If the comparison is between the same value type, both `==` and `===` **do exactly the same thing, no difference whatsoever**
+ If the value types being compared are different, `==` allows type conversions *first*. (aka coercive equality)

例如：

```javascript
42 == "42"; // true
1 == true; // true
```

> `==` prefers primitive numeric comparisons

### About `===`

the `===` operator has two special cases:

```javascript
NaN === NaN; // false
0 === -0; // true
```

Since the *lying* about such comparisons can be bothersome, it's best to avoid using `===` for them:

+ For `NaN` comparisons, use the `Number.isNaN(..)` utility
+ For `-0` comparison, use the `Object.is(..)` utility

> Humorously, you could think of `Object.is(..)` as the "quadruple-equals" `====`, the really-really-strict comparison! (真的會笑死

## Iterables

ES6 defined the basic data structure/collection types in JS as iterables. This includes strings, arrays, maps, sets, and others.

Iterate the characters in a string one at a time:

```javascript
var greeting = "Hello world!";
var chars = [ ...greeting ]; // [ "H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!" ]
```

> `...`: spread operator

if we want the `index` *and* `value` in an array iteration, we can make an entries iterator with the `entries()` method:

```javascript
var arr = [ 10, 20, 30 ];

for (let [idx,val] of arr.entries()) {
    console.log(`[${ idx }]: ${ val }`);
}
// [0]: 10
// [1]: 20
// [2]: 30

```

### Map

---

## JS Engine

+ Browser: Chakra, JavaScriptCore, Spidermonkey, V8
+ Node.js: Chakra, V8, SpiderNode
+ Electron: V8
+ IoT: Duktape, JerryScript

### JIT Compilation (Just In Time Compilation)

> JS 不是**先**被 compile 完成然後**再**執行，而是一邊 compile 一邊執行，並且交互加速

### Compilers

Modern engines have at lease two compilers, one of them is an optimising compiler and the other is a baseline compiler

1. **Re-compile** "hot" functions (being used a lot) with type info. from previous execution
2. **De-compile** if the type has changes

In V8 engine, the baseline compiler is an intepreter called "Ignition" and the optimizing compiler is called "TurboFan" (2017).

## Other Notes

### `fetch API`

```javascript
fetch('XXXXXXX')
  .then(res => {
    // the way to check if calling API succeeds
    if(res.ok) {
      
    }  
  })
  .then(data => console.log(data))
  .catch(err => console.log(error));
```

> `fetch` will always **succeed** (So even the server returns status 400, it will "fetch" something)

### What is a polyfill ?

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

---

### Some function express forms

```javascript
// IIFE: 定義完馬上就執行
(function(){ .. })();
(function namedIIFE(){ .. })();

// asynchronous IIFE
(async function(){ .. })();
(async function namedAIIFE(){ .. })();

// arrow function expressions
var f;
f = () => 42;
f = x => x * 2;
f = (x) => x * 2;
f = (x,y) => x * y;
f = x => ({ x: x * 2 });
f = x => { return x * 2; };
f = async x => {
    var y = await doSomethingAsync(x);
    return y * 2;
};
someOperation( x => x * 2 );
// ..
```

> Keep in mind that arrow function expressions are **syntactically anonymous**, meaning the syntax doesn't provide a way to provide a direct name identifier for the function.

---

### Two motivations for WASM (Web Assembly)

1. Improve the potential performance
2. Bring more parity for non-JS languages to the web platform

### Compiling Code

In classic compiler theory, a program is processed by a compiler in three basic stages:

1. **Tokenizing/Lexing**: Breaking up a string of characters into meaningful (to the language) chunks, called **tokens**. 
 
    E.g.

    `var x = 2;` => `var`, `x`, `=`, `2`, and `;`
    > Whitespace may or may not be persisted as a token, depending on whether it's meaningful or not.

2. **Parsing**: Taking a stream (array) of tokens and turning it into a tree of nested elements, which all represent the grammatical structure of the program. This is called an **Abstract Syntax Tree (AST)*.

    For example, the tree for `var x = 2;` might start with a top-level node called **VariableDeclaration**, with a child node called *Identifier* (whose value is `x`), and another child called **AssignmentExpression** which itself has a child called **NumericLiteral** (whose value is `2`).

3. **Code Generation**: taking an AST and turning it into executable code. This part varies greatly depending on the language, the platform it's targeting, and other factors.

   The JS engine takes the just described AST for `var x = 2;` and turns it into a set of machine instructions to actually create a variable called `x` (including reserving memory, etc.), and then store a value into `x`.
   
---

### What is currying?

Imagine functions only take one argument. how would we pass many? one way is to pass an object: `({ a, b, c }) => …` but we could also turn our function into a matryoshka of many functions where each takes one arg: `(a) => (b) => (c) => …` that’s currying. Not very useful in js. -- Dan Abramov

## 學習事項

### Finished

+ [x] [YDKJS - Get Started](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/README.md)
+ [ ] [YDKJS - Scope & Closures](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md)

### 初級

+ [ ] 知道組合寄生繼承，知道 class 繼承
+ [x] 知道怎麼創建類 function + class
+ [x] 知道 event loop 是什麼
+ [ ] 知道 Closure(閉包) 在實際場景中怎麼用，常見的坑
+ [x] 知道 module 是什麼，怎麼用
+ [ ] 掌握基礎 DS，比如 Stack, Tree，並了解這些 DS 計算機基礎中的作用
+ [x] `forEach`, `map`, `reduce` etc.

### 中級

+ [ ] 知道 `class繼承` 與`組合寄生`繼承的差別，並能舉例說明。
+ [ ] 知道 `event loop` 原理，知道 microtask 、 macrotask 差異，並且能從個人理解層面說出為什麼要區分。知道 node 和瀏覽器在實現 loop 時候的差別。
+ [ ] 能將繼承、作用域、閉包、模塊這些概念融匯貫通，並且結合實際例子說明這幾個概念怎樣結合在一起。
+ [ ] 能脫口而出2種以上設計模式的核心思想，並結合 `js` 語言特性舉例或口噴基礎實現。
+ [ ] 掌握一些基礎算法**核心思想**或簡單算法問題，比如排序，大數相加。

## References

1. [阿里前端面试指南，P6/P6+/P7的能力标准都在这儿了](https://zhuanlan.zhihu.com/p/143611353)
2. [You don't Know JS](https://github.com/getify/You-Dont-Know-JS)
3. [Web Dev simplified; Learn Dynamic Module Imports In 11 Minutes (2021.07)](https://youtu.be/ddVm53j80vc)
4. [Scheduling: setTimeout and setInterval](https://javascript.info/settimeout-setinterval)
5. [Franziska Hinkelmann: JavaScript engines - how do they even? | JSConf EU](https://youtu.be/p-iiEDtpy6I)
6. https://twitter.com/dan_abramov/status/1492880870499360769
