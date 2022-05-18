// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//my solution
    function disemvowel(str) {
    let newStr = (str.replace(/A|E|I|O|U|a|e|i|o|u/g, ''))
    return newStr;
   }

//best practice solution
   function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }

//shorthand solution
   disemvowel = str => str.replace(/[aeiou]/gi,'');


//solution with for loop
   function disemvowel(str) {
    var newStr = "",
        i;

    for (i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) continue;
        newStr += str[i];
    }
    return newStr;
}

console.log(disemvowel("This website is for losers LOL!"));