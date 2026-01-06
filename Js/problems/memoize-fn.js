// own version
function memoRasise(fn) {
    let cache = {};
    return function(arg){
        if(cache[arg]){
            console.log("From cache");
            return cache[arg];
        }
        cache[arg] = fn(arg);
        console.log(cache[arg], fn(arg))
        console.log("From function");
        return cache[arg];
    }
}
function callBack(arg){
    return arg + 1
}
const mainFun = memoRasise(callBack)

console.log(mainFun(2))
console.log(mainFun(2))
console.log(mainFun(4))

// Gpt version

function memoize(fn) {
    const cache = {};
  
    return function (arg) {
      if (cache[arg]) {
        console.log("From cache");
        return cache[arg];
      }
  
      console.log("Computing");
      cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  const square = memoize((n) => n * n);

square(4); // Computing → 16
square(4); // From cache → 16
square(5); // Computing → 25
