// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
function solution(string) {
    var newString = '';
    for (const letter of string){
      if (letter == letter.toUpperCase()){
        newString += ' ';
        newString += letter;
        }  else {
      newString += letter
    }
      }
    return newString
  }
    
  //best practice solution using regex
  function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }