
const myPromise =  () => {
  return new Promise((resolve, reject) => {
    resolve('foo');
  });
} 

function* a() {
  const res = yield myPromise()
    .then(resp => {
      // console.log(resp);
      return resp;
    })
  yield 2;
  return res;
}

const gen = a();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());