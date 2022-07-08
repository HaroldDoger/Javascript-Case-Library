function isPalindrome(x) {

    var re = /[\W_]/g; // this \W removes all non-alphanumeric characters:
    var lowRegStr = x.toLowerCase().replace(re, ''); //toLowercase returns the string to lowercase, .replace replaces the string with the next argument
    var reverseStr = lowRegStr.split('').reverse().join(''); //split turns the string into an array, reverse reverses the array. join brings it back together
    return reverseStr === lowRegStr;
  }
  
  //clever/best practice solution 
    //   const isPalindrome = (x) => {
    //     return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
    //   }

    
  // [^A-Z] matches anything that is not enclosed between A and Z
  
  // [^a-z] matches anything that is not enclosed between a and z
  
  // [^0-9] matches anything that is not enclosed between 0 and 9
  
  // [^_] matches anything that does not enclose _