// The goal of this exercise is to convert a
// string to a new string where each character
// in the new string is "(" if that character appears 
// only once in the original string, or ")" if that character 
// appears more than once in the original string.
// Ignore capitalization when 
// determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    let array = word.toLowerCase().split("")

    let mapped = array.map(function (element, i, arr) {
      return arr.indexOf(element) == arr.lastIndexOf(element) ? "(" : ")";
    })
    let joined = mapped.join("")
   return joined;
}
//best practice solution
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
