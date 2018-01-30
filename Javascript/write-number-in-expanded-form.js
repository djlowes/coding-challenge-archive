// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
var arr = []
var str = '';
num = num.toString();
 for (let i = 0; i<num.length; i++) {
  if (num[i] !== '0') {
    str = str + num[i];
    if (i === num.length - 1) {
      arr.push(str);
      str = '';
    }
      for(var j = i + 1; j < num.length; j++) {
        str = str + '0';
          if (j === num.length - 1) {
            arr.push(str);
            str = '';
         }
      }
    }
  }
   return arr.join(' + ');
}

// Sample Tests
// Test.assertEquals(expandedForm(12), '10 + 2');
// Test.assertEquals(expandedForm(42), '40 + 2');
// Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');
