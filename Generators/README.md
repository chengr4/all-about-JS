# Generators

+ Generators are functions which can be exited and later re-entered.
+ When put a `*` after a function, it is a generator.

E.g.

```javascript
function* gen() {} 
```

It don't fire the code, instead, it will set up the generator and **return** towards an interator.

## Yield

1. Pause the iterator by `yield`
2. then `return` value
3. Yield can also take in a value when we retart the function
4. `yield*` is used to delegate to another outside generator function

## Use cases

+ Infinite loop (See inside `generators.js`)
+ Asychronous functions which call next when the async function is done

  ```javascript
  function request(url) {
    makeAjaxCall(url, res => {
    	it.next(response); 
    });
  }
  
  function* main() {
    var result1 = yield request("https://XXXXX");
    var data = JSON.parse(result1);
    
    var result2 = yield request("https://XXXXX");
    var data2 = JSON.parse(result2);
  }
  
  var it = main();
  it.next(); // get it all start
  ```

+ Redux Saga

## Why we used generators?

1. To display an asynchronous code in a synchronous like fashion (尚未體會) 

## References

1. [THe Net Ninja; JavaScript ES6 Tutorial #11 - Generators (2016)](https://youtu.be/Ojis8iFIjDQ)
2. [Asynchronous JavaScript #5 - Generator](https://youtu.be/pnS2lBQuLGc)
3. [Understanding Generator Functions & Using Redux Saga](https://youtu.be/o3A9EvMspig)
4. [JS Generators: How is `return yield` different from `yield`?](https://stackoverflow.com/questions/42309185/js-generators-how-is-return-yield-different-from-yield)
5. [Web Dev Simplified; Learn JavaScript Generators In 12 Minutes (2021.8)](https://youtu.be/IJ6EgdiI_wU)

