# Operators

## Equality

### `==` vs. `===`

+ If the comparison is between the same value type, both `==` and `===` **do exactly the same thing, no difference whatsoever**
+ If the value types being compared are different, `==` allows type conversions *first*. (aka coercive equality)

eg:

```javascript
42 == "42"; // true
1 == true; // true
```

> `==` prefers primitive numeric comparisons

### Strict equality `===`

the `===` operator has two special cases:

```javascript
NaN === NaN; // false
0 === -0; // true
```

Since the *lying* about such comparisons can be bothersome, it's best to avoid using `===` for them:

+ For `NaN` comparisons, use the `Number.isNaN(..)` utility
+ For `-0` comparison, use the `Object.is(..)` utility

> Humorously, you could think of `Object.is(..)` as the "quadruple-equals" `====`, the really-really-strict comparison! (真的會笑死