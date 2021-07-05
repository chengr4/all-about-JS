# `this`

`this` in JS is not a fixed characteristic of a function based on the function's definition, but rather a dynamic characteristic that's determined each time the function is called (execution context).

> Two misconception:
> 1. A function's `this` refers to the function itself.
>
> 2. Because of how `this` works in other languages, another misconception is that `this` points the instance that a method belongs to.

E.g.

```javascript
function classroom(teacher) {
  return function study() {
    console.log(
      // study() is also closed over the "teacher" variable from its outer scope.
      `${ teacher } says to study ${ this.topic }`
    );
  };
}
var assignment = classroom("Kyle");
```

The outer `classroom(..)` function makes no reference to a `this` keyword, so it's just like any other normal function. But the inner `study()` function does reference `this`, which makes it a `this`-aware function. In other words, it's a function that is dependent on its **execution context**.

The inner `study()` function returned by `classroom("Kyle")` is assigned to a variable called `assignment`. So how can `assignment()` (aka `study()`) be called?

```javascript
assignment();
// Kyle says to study undefined  -- Oops :(
```

Since this program is not in `strict` mode, context-aware functions that are called **without any context specified** default the context to the global object (`window` in the browser). As there is no global variable named `topic` (and thus no such property on the global object), `this.topic` resolves to `undefined`.

Now consider:

```javascript
var homework = {
    topic: "JS",
    assignment: assignment
};

homework.assignment();
// Kyle says to study JS

```

A copy of the `assignment` function reference is set as a property on the `homework` object, and then it's called as `homework.assignment()`. That means the `this` for that function call will be the `homework` object. Hence, `this.topic` resolves to `"JS"`.

Another example:

```javascript
var otherHomework = {
    topic: "Math"
};

assignment.call(otherHomework);
// Kyle says to study Math
```

Another way to invoke a function is with the `call(...)` method, which takes an object (`otherHomework` here) to use for setting the `this` reference for the function call. The property reference `this.topic` resolves to `"Math"`.

## `this` with `prototype`

```javascript
var homework = {
    study() {
        console.log(`Please study ${ this.topic }`);
    }
};

var jsHomework = Object.create(homework);
jsHomework.topic = "JS";
jsHomework.study();
// Please study JS

var mathHomework = Object.create(homework);
mathHomework.topic = "Math";
mathHomework.study();
// Please study Math
```

The two objects `jsHomework` and `mathHomework` each prototype link to the single `homework` object, which has the `study()` function. `jsHomework` and `mathHomework` are each given their own `topic` property.

> In many other languages, it would seem `this` would be `homework` because the `study()` method is indeed defined on `homework`, but It is different in JS.

## Benefit

1. 一個 close over 的 function 無法使用不同 scope 的 variables，但是藉由 `this` (dynamic context awareness) 在某些情況下可以解決這個問題
