function FibonacciSum(num){
var fibnums = [1, 2];
while (fibnums[fibnums.length-1]<=num) {
    fibnums.push(fibnums[fibnums.length-1] + fibnums[fibnums.length-2]);
}
var sum = 0;
  for (var i = 0; i < fibnums.length; i ++ ) {
    if(fibnums[i] %2 == 0) sum+= fibnums[i];
  }
return sum;
}

FibonacciSum(4000000);
