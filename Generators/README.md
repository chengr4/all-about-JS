# Generators

When put a `*` after a function, it is a generator.
E.g.

```javascript
function* gen() {} 
```

It don't fire the code, instead, it will set up the generator and **return** towards an interator.

## Yield

1. Pause the iterator by `yield`
2. then `return` value

## Why we used generators?

1. To display an asynchronous code in a synchronous like fashion (尚未體會)

## References

1. [THe Net Ninja. JavaScript ES6 Tutorial #11 - Generators (2016)](https://youtu.be/Ojis8iFIjDQ)
2. [Asynchronous JavaScript #5 - Generator](https://youtu.be/pnS2lBQuLGc)

