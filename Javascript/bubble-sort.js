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
    

