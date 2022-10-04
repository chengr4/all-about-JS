# Objects

- key-value pair
- Object coerces `keys` to become type `string`

Eg

```javascript
const arr = [1, 3];
const obj1 = {};
obj1[arr] = 3;
console.log(obj1); // { '1,3': 3 }

const keyObj = { a: 3 };
const obj2 = {};
obj2[keyObj] = 3;
console.log(obj2); // { '[object Object]': 3 }
```

> Be careful if using an object as key, it will become only `'[object Object]'` no matter what the keyObj is. Use `Map` can avoid the issue

## Object vs Set vs Map

Which uses Objects (a hash table, essentially). One immediate advantage of using Objects is that you can return early if you detect a duplicate, whereas with Sets, you have to convert the entire array to a Set before you can decide if there are duplicates. => 

- Small array, using Sets faster
- Larger array, using Objects becomes significantly faster.

> What about `Map`?

## `toJSON()`

https://thecodebarbarian.com/what-is-the-tojson-function-in-javascript.html
