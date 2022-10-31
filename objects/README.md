# Objects

- key-value pair
- Object coerces `keys` to become type `string`

---

- [Methods](#methods)
- [Object vs Set vs Map](#object-vs-set-map)
- [Bigint](#bigint)

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

## Methods

### Object.assign()

The `Object.assign()` method **copies** all **enumerable own properties** from one or more source objects to a target object. It returns the modified target object.

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

// target is front
const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// expected output: true
```

## Object vs Set vs Map

Which uses Objects (a hash table, essentially). One immediate advantage of using Objects is that you can return early if you detect a duplicate, whereas with Sets, you have to convert the entire array to a Set before you can decide if there are duplicates. => 

- Small array, using Sets faster
- Larger array, using Objects becomes significantly faster.

> What about `Map`?

## toJSON()

https://thecodebarbarian.com/what-is-the-tojson-function-in-javascript.html

## Bigint

- BigInt is a primitive wrapper object
- BigInt is used to represent Integers greater than 2^53 -1.
- (2^53) - 1 is the Maximum Number Primitive which can be safely represented using JavaScript.

eg `(BigInt("0b11") + BigInt("0b1")).toString(2); // "100"`
