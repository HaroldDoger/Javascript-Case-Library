//A pangram is a sentence that contains every single letter of the alphabet at least once. 
//For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
//because it uses the letters A-Z at least once (case is irrelevant).
//Given a string, detect whether or not it is a pangram. Return True if it is
//False if not. Ignore numbers and punctuation.

function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("").every(function(x){
      return string.indexOf(x) !== -1;
  });
}

// This Solution use indexOf Method.
// indexOf Method know us If Array has Index Value.
// And every Method return Boolean.
// So, In Frist, Make Array Alphabet String. //"".split("");
// And Then, Find X Index in String Parameter.
// If return value is -1, String don’t have All Alphabet.
