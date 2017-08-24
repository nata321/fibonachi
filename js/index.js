// let n = +prompt('enter n');

// function fibonacchi(n){
//   if ( n == 0 ) {
//     return 0;
//   } else if (n == 1) {
//     return 1;
//   } else {
//     return fibonacchi(n-2) + fibonacchi(n-1);
//   }
// }
// document.write(fibonacchi(n));


let n = +prompt('enter n');

function fib(n) {
  var f, t1, t2;

  for (i = 1; i <= n; i++) {
    f = t1 + t2 || 1;
    t1 = t2;
    t2 = f;
  }
   return f;
}
 document.write(fib(n));