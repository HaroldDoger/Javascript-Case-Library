// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.
function stringTransformer(str) {
    var charArr = str.split(' ').reverse().join(' ').split('')
    
    for(let i = 0; i < charArr.length; i++){
      if(charArr[i] === charArr[i].toUpperCase()){
        charArr[i] = charArr[i].toLowerCase();
      }
      else{
        charArr[i] = charArr[i].toUpperCase();
      }
      
    }
    var fullString = charArr.join("").split(' ').join(' ')
   return fullString
  }
  
  //one line solution
  // function stringTransformer(str) {
  //  let transformStr = str => str.split(' ').reverse().join(' ').split('')
  //  .map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
  //  return console.log(transformStr); 
  // }

  //best practice solution
  function stringTransformer(str) {
    return str
      .split(' ')
      .reverse()
      .join(' ')
      .split('')
      .map(v => v == v.toUpperCase() ?
        v.toLowerCase() :
        v.toUpperCase())
      .join('');
  }