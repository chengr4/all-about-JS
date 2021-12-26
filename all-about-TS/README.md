# All about TypeScript

- [interface](#interface)
- [type](#type)
- [Generics](#generics)

## `interface`

- TS only
- Enfore a certain structure of a class or object (define the shape)
- `interface` can extend another `interface`
- `interface` will merge same `interface` automatically (delcaration merging)
- `interface` does not have Union `|` feature

E.g.

In Function:

```typescript
interface RectangleOptions {
  width: number;
  length: number;
  height?: number; // with '?' tells TS height is optional
}

function drawRectangle(options: RectangleOptions) {
  let width = options.width;
  let length = options.length;
      
  // Draw logic
}

drawRectangle({
  width: 100,
  length: 50,
});
```

In Class:

```typescript

// with class
interface HasFormatter {
  format(): string;
}

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

class Invoice implements HasFormatter {
  format() {
    return "XXXX"
  }
}

let invoice = new Invoice();
```

### `interface` extends `interface`

```typescript
interface Person {
  name: string;
  hungry: boolean;
}

interface Harry extends Person {
  youtuber: boolean;
}
```

## `type`

Type Alias

- `type` cannot extend another `type`
- `type` has Union `|` feature
- Functions are better `type` than `interface`

```typescript
type Hungry = boolean;
type Greeting = (name: string) => string;

type Person = {
  name: string;
}

type Youtuber = {
  youtuber: boolean;
}

// Use Union
type Harry = Person | Youtuber;
```

## Generics

```typescript
const last = <T>(arr: T[]) => {
  return arr[arr.length - 1];
}

const l2 = last<string>(["a", "b", "c"]);

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.first.Name + ' ' + ojb.lastName
  };
}
```

With `interface`

```typescript
interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type numberTab = Tab<number>;

```

In React

```typescript
import React from "react";

interface Props {
  name: string
}

const HelloWorld: React.FC<Props> = ({ name }) => 

  return <div> hello {name}</div>;
}
```

## References

1. [The Net Ninja; TypeScript Tutorial #15 - Interfaces (2020.5)](https://youtu.be/VbW6vWTaHOY)
2. [Harry Wolff; TypeScript Interfaces vs Types (2020.5)](https://youtu.be/crjIq7LEAYw)
3. [Ben Awad; Typescript Generics Tutorial (2019.8)](https://youtu.be/nViEqpgwxHE)
4. [Leonardo Maldonado; Types vs. interfaces in TypeScript (2020.5)](https://blog.logrocket.com/types-vs-interfaces-in-typescript/)
