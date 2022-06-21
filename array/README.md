# Array

- [Useful Strategies](#useful-strategies)
- [Traps](#trap)
- [High Order Functions](#high-order-functions)

## Useful Strategies

- Swap

```javascript
[a, b] = [b, a];

const arr = [1, 2, 3, 4];
[arr[0], arr[1]] = [arr[1], arr[0]];
```

## Traps

```javascript
// wrong! all empty array filled in share same address
const freq = new Array(nums.length).fill([])
```

## High Order Functions

+ [forEach()](#foreach)
+ [filter()](#filter)
+ [map()](#map)
+ [splice()](#splice)
+ [find()](#find)
+ [reduce()](#reduce)
+ [sort()](sort)

### forEach()

> Q: 可否中斷 forEach()
> 
> A: There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool. (from MDN Web Docs)

### filter()

[^1]

### map()

**creates a new array**

### splice()

### find()

E.g.

### reduce()

```
arr.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)
```

#### Usages

E.g.
Return a value that contains the latest date [2]
```Javascript
array.reduce((a, b) => {
  return new Date(a.MeasureDate) > new Date(b.MeasureDate) ? a : b;
});
```

## References

1. [Traversy Media. JavaScript Higher Order Functions & Arrays (2018)](https://youtu.be/rRgD1yVwIvE)
2. [What is the elegant way to get the latest date from array of objects in client side](https://stackoverflow.com/questions/36577205/what-is-the-elegant-way-to-get-the-latest-date-from-array-of-objects-in-client-s)

[^1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
