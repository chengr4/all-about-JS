function* gen() {
  console.log("a");
  console.log("b");
  console.log("c");
}

var myGen = gen();
myGen.next();
/*
a
b
c
*/

function* gen2() {
  yield console.log("a"); // run this line and pause in front of yield
  console.log("b");
  console.log("c");
}

var myGen2 = gen2();
myGen2.next(); // a

function* gen3() {
  var x = yield 'a';
  var y = yield 'b';
  var z = yield 'c';
  return x;
}

var myGen3 = gen3();
myGen3.next(); // a
myGen3.next(2); // b
myGen3.next(4); // c
console.log("x is: "+ myGen3.next().value); // x is: 2

// asynchronous part begin
function* gen4() {
  var x = yield 'a';
 
  return x;
}
let myGen4 = gen4();
console.log(myGen4.next());
console.log(myGen4.next(3));


// Infinite loop
console.log("Infinite loop start");
function* generateId() {
  let id = 1;

  while(true) {
    yield id;
    id++;
  }
}

const generatorObject = generateId();
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());

console.log("Infinite loop end");

// A test
function* foo() {
  yield 123;
}

function* bar() {
  return yield 123;
}

function* lee() {
  return 123;
} 

var f = foo();
var b = bar();
var l = lee();

console.log(f.next());
console.log(f.next(2));
console.log(b.next());
console.log(b.next(2));
console.log(l.next());
console.log(l.next(2));

function call() {
  return 3;
}

function* gen5() {
  let res = yield call();
  return res;
}

let myGen5 = gen5();
console.log('5', myGen5.next()); // 5 { value: 3, done: false }
console.log('5', myGen5.next()); // 5 { value: undefined, done: true }
console.log('5', myGen5.next());