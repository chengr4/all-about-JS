# Regular Expression in JS

## `RegExp.prototype.exec()`

```javascript
const eg = [
  'Quick Brown Fox Jumps',
  'Brown',
  'Jumps',
  index: 4,
  input: 'The Quick Brown Fox Jumps Over The Lazy Dog', // The original string that was matched against.
  groups: undefined
]
```

| Index | Description |
| ----- | ----------- |
| 0 | The full string of characters matched |
| 1, 2, ..., n | 小括號 (parenthese) 內的 substring 如果有匹配 |
| n+1 | Match 到的 index 總數 |
| n+2 (?) | indices(?) |

## References

1. [Cheetsheet](https://gist.github.com/chengr4/26e4354a96aeed11ba005e1b6fe17223)