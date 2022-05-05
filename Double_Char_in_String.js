// Given a string, you have to return a string in which each character
//  (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
  //your code here
    
    var newStr = ''; //have to create new str variable
    
    for(i=0; i < str.length; i++)
      {
        newStr += str.charAt(i) + str.charAt(i);
      }

        return newStr;
  }
  // Attempt 1 --> console.log(str.repeat(i)) 
  // Repeat method only repeats entire string x amount of times

//   BEST PRACTICE
const doubleChar = (str) => str.split("").map(c => c + c).join("");