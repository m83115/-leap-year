//前 n 個 fib 數字
function fib(n) {
  if (n < 2) {
      return n
    }
    return fib(n-2) + fib(n-1)
}



// function fib(n) {
//     function fib_n(curr, next, n) {
//       if (n == 0) {
//         return curr;
//       }
//       else {
//         return fib_n(next, curr+next, n-1);
//       }
//     }
//     return fib_n(0, 1, n);
//   }
  
//   console.log(fib(10));

