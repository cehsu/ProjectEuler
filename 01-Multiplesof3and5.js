//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.
function FindMultiples(num){
var multiples = [];
for (var i = 0; i <num; i ++ ) {
    if(i%3==0) multiples.push(i);
    else if (i %5 ==0) multiples.push(i);
}
var sum = 0;
multiples.forEach(function(element){
    sum+= element;
});
return sum;
}
    
FindMultiples(1000);
