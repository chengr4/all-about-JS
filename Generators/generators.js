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

function* gen3() {
  var x = yield 'a';
  var y = yield 'b';
  var z = yield 'c';
  return x;
}

var myGen3 = gen3();
myGen3.next();
myGen3.next(2);
myGen3.next(4);
console.log("x is: "+ myGen3.next().value);

// asynchronous part begin
function* gen4() {
  var x = yield 'a';
 
  return x;
}