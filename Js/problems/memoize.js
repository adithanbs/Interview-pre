function callOnlyNTimes(fn, limit) {
  let count = 0;

  return function (...args) {
    if (count < limit) {
      count++;
      console.log(`Function called ${count} time(s)`);
      return fn(...args);
    } else {
      console.log("Call limit reached ❌");
    }
  };
}
function sayHello() {
  console.log("Hello!");
}

const limitedHello = callOnlyNTimes(sayHello, 3,8);

limitedHello(); // Hello! (1)
limitedHello(); // Hello! (2)
limitedHello(); // Hello! (3)
limitedHello(); // Call limit reached 
limitedHello(); // Call limit reached 