# Some Scenarios

Explore JS more

## Object

```javascript
const object1 = {
  test: 1,
  tasks: [1, 2, 3]
};

const object2 = {
  apple: 3
};

object2.tasks = object1.tasks; // both use the same array

console.log(object1); // { tasks: [ 1, 2, 3 ] }
console.log(object2); // { tasks: [ 1, 2, 3 ] }

object2.tasks.push(222);

console.log(object1); // { tasks: [ 1, 2, 3, 222 ] }
console.log(object2); // { tasks: [ 1, 2, 3, 222 ] }

```

```javascript
const object1 = {
  tasks: [1, 2, 3]
};

const object2 = {
};

object2.tasks = [...object1.tasks]; // clone tasks

console.log(object1); // { tasks: [ 1, 2, 3 ] }
console.log(object2); // { tasks: [ 1, 2, 3 ] }

object2.tasks.push(222);

console.log(object1); // { tasks: [ 1, 2, 3 ] }
console.log(object2); // { tasks: [ 1, 2, 3, 222 ] }
```
