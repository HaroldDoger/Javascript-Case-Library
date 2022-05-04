// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, 
// there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

//solution
function smash (words) {
  
    console.log(words.join(' '));
  
  return words.join(' ');
}

//best practice
smash = function (words) {
    return words.join(" ");
  };