// Sum up to and including the number
function sumRange(num) {
  if (Math.round(num) - num !== 0) {
    return "Not a whole number";
  }
  if (num == 1) {
    return 1;
  }
  return sumRange(num - 1) + num;
}

// Power function

function power(number, exponent) {
  if (exponent == 0) {
    return 1;
  }
  if (exponent == 1) {
    return number;
  }
  return power(number, exponent - 1) * number;
}

// Factorial

function factorial(number) {
  if (number == 0) {
    return 1;
  }
  if (number == 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

// Array product

function arrayProduct(arr) {
  return arr.reduce((sum, adding) => sum + adding);
}

// Fibonacci iter

function fibs(num) {
  if (num == 0) {
    return [];
  }
  if (num == 1) {
    return [0];
  }
  if (num == 2) {
    return [0, 1];
  }
  let ans = [];
  ans[0] = 0;
  ans[1] = 1;
  if (num > 2) {
    for (let i = 2; i < num; i++) {
      ans.push(ans[i - 1] + ans[i - 2]);
    }
  }
  return ans;
}

console.log(fibs(10));

//fibsRec

function fibsRec(num) {
    // base cases
    if (num == 0) {
        return []
    }
    if (num == 1){
        return [0]
    }
    if (num == 2) {
        return [0,1]
    }
    return fibsRec(num - 1).concat(fibsRec(num - 1).slice(-2)[0] + fibsRec(num - 1).slice(-2)[1])
}

console.log(
    fibsRec(0),
    fibsRec(1),
    fibsRec(2),
    fibsRec(3),
    fibsRec(8)
)