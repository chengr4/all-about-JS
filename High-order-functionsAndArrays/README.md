# High order functions & Arrays

## Contents

+ [forEach()](#foreach)
+ [filter()](#filter)
+ [map()](map)
+ [find()](#find)
+ [reduce()](#reduce)
+ [sort()](sort)

## forEach()

> Q: 可否中斷 forEach()
> 
> A: There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool. (from MDN Web Docs)

## map()

**creates a new array**

## find()

E.g.

## reduce()

```
arr.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)
```

### Usages

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
