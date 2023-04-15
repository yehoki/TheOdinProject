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
  
  console.log(fibs(8));
  
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