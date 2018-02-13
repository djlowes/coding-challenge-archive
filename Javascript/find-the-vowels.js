// Codewars - Find the vowels
// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

// NOTE: Vowels in this context refers to English Language Vowels - a e i o u y
// NOTE: this is indexed from [1..n] (not zero indexed!)

//SOLUTION
function vowelIndices(word){
// 1. Define an empty array we can push index values into
  var arr = [];
//2. Iterate through 'word', searching for vowels
  for (i = 0 ; i <word.length; i++) {
//3. Use 'indexOf' to find locations of vowels inside of 'word'
    if ('aeiouy'.indexOf(word[i]) !== -1)
//4. As long as the vowels are located inside of 'word' (ie not -1), push their index location into an array
      arr.push(i+1);
  }
//5. Print the array
  return arr;
}
