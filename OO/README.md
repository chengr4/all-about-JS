# Obect Oriented JavaScript

> Everything in JS is an Object

JS is one of very few languages where you have the option to create objects directly and explicitly, without first defining their structure in a class.

## Specific Objects

+ `Window` Object

  `innerHeight`, `innerWidth` properties => 視窗的長寬

## Prototypes

A `prototype` is a characteristic of an object, and specifically resolution of a `property` access.

### Object Linkage

To define an object prototype linkage, you can create the object using the `Object.create(..)` utility:

```javascript
var homework = {
    topic: "JS"
};

var otherHomework = Object.create(homework);

otherHomework.topic;   // "JS"
```

But consider:

```javascript
homework.topic;
// "JS"

otherHomework.topic;
// "JS"

otherHomework.topic = "Math";
otherHomework.topic;
// "Math"

homework.topic;
// "JS" -- not "Math"
```



## Class
