let n = +prompt('enter n');
function fibonacchi(n){
  if ( n == 0 ) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fibonacchi(n-2) + fibonacchi(n-1);
  }
}
document.write(fibonacchi(n));


let n = +prompt('enter n');
 function fib(n) {
  let a = 1,
      b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
document.write(fib(n));