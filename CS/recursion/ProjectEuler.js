// Multiples of 3 or 5

function threeOrFive(num) {
  let ans = 0;
  for (let i = 1; i < num; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      ans += i;
    }
  }
  return ans;
}

// console.log(threeOrFive(10));
// console.log(threeOrFive(1000));

// Even valued Fib

function fib(num) {
  if (num == 0) {
    return 0;
  }
  if (num == 1) {
    return 1;
  }
  if (num == 2) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}

function findEvenSum() {
    let ans = 0;
    let exp = 0;
    let ret = 0;
    while (fib(exp) < 4000000){
        ans = fib(exp);
        if (ans % 2 == 0){
            ret += ans;
        }
        exp++;
    }
    return ret;
}

console.log(findEvenSum());
