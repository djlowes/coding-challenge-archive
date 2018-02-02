// Consider an array of  integers, , where all but one of the integers occur in pairs. In other words, every element in  occurs exactly twice except for one unique element.
// Given , find and print the unique element.

// Input Format
// The first line contains a single integer, , denoting the number of integers in the array. 
// The second line contains  space-separated integers describing the respective values in .



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
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    
/////////////// start code here ////////////////////

    var arr = a; //readability
    for (let i=0; i<arr.length; i++) {
        arr.sort(); // sort array so you can compare left and right values, shown below
        if(arr[i] !== arr[i +1] && arr[i] !== arr[i -1]) {
            console.log(arr[i]);
        }  
    }
}
