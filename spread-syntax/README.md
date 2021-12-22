# Spread Syntax

Spread syntax effectively goes **one level deep** while copying an array (and I think object also)

## Spread in object literals

> Add from ES2018  
> Can not spread but clone

Shallow-cloning (instead of `Objext.assign()`):

```javascript
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }

```

> Note that `Object.assign()` triggers setters, whereas spread syntax doesn't.

## References

1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
