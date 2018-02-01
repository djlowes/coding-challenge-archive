// Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.
// Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

// Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.
// The first line contains a single string, . 
// The second line contains a single string, .

// Constraints
// It is guaranteed that  and  consist of lowercase English alphabetic letters (i.e.,  through ).

// Output Format
// Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.

// Sample Input
// cde
// abc

// Sample Output
// 4

// Explanation
// We delete the following characters from our two strings to turn them into anagrams of each other:
// Remove d and e from cde to get c.
// Remove a and b from abc to get c.
// We must delete  characters to make both strings anagrams, so we print  on a new line.




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
    var a = readLine();
    var b = readLine();
    
/////////////// Start Code Here ////////////////////
    
    aOne = a.split("");
    aTwo = b.split("");
    // aThree = [];
    counter = 0;
   
// If you reverse engineer, you will find that the number of times it takes to remove elements is the sum the lengths of the arrays, minus the amount of correct unique number combinations. 
    if (aOne.length < aTwo.length){
        for (let j = 0; j < aOne.length; j ++) {
            for (let i = 0; i < aTwo.length; i ++ ){
                if (aOne[j] === aTwo[i]) {
                    counter ++;
                    aTwo[i] = 0; //ensures elements are not counted twice
                    break;   
                }
             }
         }
    console.log(aTwo.length + aOne.length - (counter * 2));
  
    } else {
        for (let i = 0; i < aTwo.length; i ++) {
            for (let j = 0; j < aOne.length; j++) {
                if (aTwo[i] === aOne[j]) {
                    counter++;
                    aOne[j] = 0; //ensures elements are not counted twice
                    break;
                }
            }
        }
    console.log(aOne.length + aTwo.length - (counter * 2));
    }
}
