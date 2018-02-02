// Hackerrank > Cracking The Coding Interview > Arrays: Left Rotation

// A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. For example, if left rotations are performed on array , then the array would become .
// Given an array of  integers and a number, , perform  left rotations on the array. Then print the updated array as a single line of space-separated integers.

// Input Format
// The first line contains two space-separated integers denoting the respective values of  (the number of integers) and  (the number of left rotations you must perform). 
// The second line contains  space-separated integers describing the respective elements of the array's initial state.


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    
    /////////////// start coding here ////////////////////
    
    var i = k;
    if (k > n) {
        i = k % n;
    }
    console.log([a.splice(i, n).join(' ')].concat(a).join(' '));
    
    /////////////// end coding here ////////////////////
    
}


// SECOND SOLUTION

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    
    var ints = n;
    var rotations = k;
    var arr = a;
    var run = function () {
        var a = arr.splice(0, 1);
        arr = arr.concat(a);
    }
    for (let i=2; i<=n; i++) {
        run();
    }  
    console.log(parseFloat(arr.join().replace(/,/g, "")));
    
}
