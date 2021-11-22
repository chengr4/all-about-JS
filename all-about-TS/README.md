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

## References

1. [The Net Ninja; TypeScript Tutorial #15 - Interfaces (2020.5)](https://youtu.be/VbW6vWTaHOY)
2. [Harry Wolff; TypeScript Interfaces vs Types (2020.5)](https://youtu.be/crjIq7LEAYw)
