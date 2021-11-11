# Functional Programming
 
## Attributes

+ input -> output
+ ~~Side Effects~~
+ data in, data out

## Immutable Data Structure

We use "trie" structure to make copying arrays or objects more efficient

> Terms
> + Structure sharing: Share the structure of the tree between the old version and the new one

### For Array

### For Object

> Google Hash Array Mapped Trie

```javascript
// E.g.
const zoo = {
  m: "monkey",
  r: "rabbit",
  p: "panda",
  f: "frog"
}

// hash keys to get number
zoo["f"]
hash("f") === 5 === 0b101 // zoo -> 1 -> 0 -> 1
```

### Libraries

+ mori
  ```javascript
  const mori = require("mori");
    
  const a = mori.vector(1, 2); // [1, 2]
  const a2 = mori.conj(a, 3); // [1, 2, 3]
  mori.count(a); // 2
  mori.get(a2, 2); // 3
  ```
+ immutable
  ```javascript
  const imjs = require("immutable");
    
  const a = imjs.List.of(1, 2); // [1, 2]
  const a2 = a.push(3); // [1, 2, 3]
  a.size; // 2
  a2.get(2); // 3
  ```

## References

1. [Anjana Vakil; Immutable data structures for functional JS | JSConf EU (2017.5)](https://youtu.be/Wo0qiGPSV-s)
