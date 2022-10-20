// // In this Kata, you will be given an array of numbers in which two numbers occur once and the 
// rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// // For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// Every other number occurs twice.

function repeats(arr){
  // first filter the array to only get the items occuring once, aka filter for items where indexOf values = lastIndexOf value
   return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
  //  then reduce to get the sum of the two numbers
   .reduce((a, b) => a + b);
};
