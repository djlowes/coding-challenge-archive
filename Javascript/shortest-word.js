// x Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  var arr = s.split(" ");
  arr.sort(function(a, b) {
    return a.length - b.length;
    });
  return arr[0].length
}

// Sample Tests
Test.describe("Example tests",_=>{
Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
});

