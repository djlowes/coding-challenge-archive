// HackerRank > Cracking the Coding Interview > Sorting: Bubble Sort

// Task 
// Given an -element array, , of distinct elements, sort array  in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

// Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
// First Element: firstElement, where  is the first element in the sorted array.
// Last Element: lastElement, where  is the last element in the sorted array.
// Hint: To complete this challenge, you must add a variable that keeps a running tally of all swaps that occur during execution.

// Input Format
// The first line contains an integer, , denoting the number of elements in array . 
// The second line contains  space-separated integers describing the respective values of .

// Output Format
// You must print the following three lines of output:

// Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
// First Element: firstElement, where  is the first element in the sorted array.
// Last Element: lastElement, where  is the last element in the sorted array.



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
    
/////////////// Start Code Here ////////////////////
    
    // Set variable to calculate number of iterations, used in stdout line 1
    var counter = 0;
    // Make array more readible for rest of code
    var arr = a;
    var len = a.length;
    
        // Iterate through the array, checking if the left element is greater than the right element
        for (var i = len-1; i>=0; i--){
            for(var j = 1; j<=i; j++){
                if(arr[j-1]>arr[j]){
                    // When it is, swap the elements around and count how many times this function has been performed               
                    var temp = arr[j-1];
                    arr[j-1] = arr[j];
                    arr[j] = temp;
                    counter++;
                }
            }
        }
   console.log("Array is sorted in " + counter + " swaps.");
   console.log("First Element: " + arr[0]);
   console.log("Last Element: " + arr[len-1]);
    
/////////////// End Code Here ////////////////////
}
    

