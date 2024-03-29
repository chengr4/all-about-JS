# Scope & Closures

## Scope

Scope is primarily determined during **compilation** => Sould not renerally be affected by runtime conditions.

> (Cheating) Modify Scope during Runtime: 
> 1. use `eval(..)`
> 2. use `with` => But higely not recommend

**3 Keys:**

1. Variables are declared in specific scopes, which can be thought of as colored marbles from matching-color buckets
2. Any variable reference that appears in the scope where it was declared, or appears in any deeper nested scopes, will be labeled a marble of that same color—unless an intervening scope (介於中間的 scope) "shadows" the variable declaration
3. 引擎在編譯期間決定 scope(colored bucket) 和它的 variables(marble)，這些訊息便於 code execution 期間找查變數

### Lexical Scope


## Closure

定義：Closure 是指 function 記住並繼續存取其 scope 外的 variable，即使該 function 在不同的 scope 中執行。So functions can read or write variables “outside” of them. This works not only with top level variables, but with local variables too (from nested functions).

E.g.

```javascript
function greeting(msg) {
    return function who(name) {
        console.log(`${ msg }, ${ name }!`);
    };
}

var hello = greeting("Hello");
var howdy = greeting("Howdy");

hello("Kyle");
// Hello, Kyle!

hello("Sarah");
// Hello, Sarah!

howdy("Grant");
// Howdy, Grant!
```

When the `greeting(..)` function finishes running, normally we would expect all of its variables to be garbage collected (removed from memory). We'd expect each `msg` to go away, but they don't. The reason is closure. Since the inner function instances are still alive (assigned to `hello` and `howdy`, respectively), their closures are still preserving the `msg` variables.

These closures are not a snapshot of the msg variable's value; they are a direct link and preservation of the variable itself. That means closure can actually observe (or make!) updates to these variables over time.

Closure is most common when working with asynchronous code, such as with callbacks. Consider:

```javascript
function getSomeData(url) {
    ajax(url,function onResponse(resp){
        console.log(
            `Response (from ${ url }): ${ resp }`
        );
    });
}

getSomeData("https://some.url/wherever");
// Response (from https://some.url/wherever): ...
```

The inner function `onResponse(..)` is closed over `url`, and thus preserves and remembers it until the Ajax call returns and executes `onResponse(..)`. Even though `getSomeData(..)` finishes right away, the `url` parameter variable is kept alive in the closure for as long as needed.
