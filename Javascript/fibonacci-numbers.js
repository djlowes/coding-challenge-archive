// The Fibonacci Sequence 
// The Fibonacci sequence begins with  and  as its respective first and second terms. After these first two elements, each subsequent element is equal to the sum of the previous two elements.

function processData(input) {
    var n = parseInt(input);
    console.log(fibonacci(n));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

//////// INSERT CODE HERE //////////

function fibonacci(n) {
    var a = 1;
    var b = 0;
    var temp;
    while (n-1 >= 0){
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }
  return b;
}
