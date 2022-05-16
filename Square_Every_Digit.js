// // Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


function squareDigits(num){
  
    var result = ""; //set a string variable called result
    
    num = num.toString(); //convert the num integer into string using toString()
    
    for (var i = 0; i < num.length; i++) //create a for loop that iterates through the length of the string in the variable num
    {
      result = result + (num[i] * num[i]).toString(); //concatenate result onto itself after squaring num[i] and converting it to String
    }
    
    return Number(result); //return result as a Number/integer and NOT a string
  }
  
//shorthand bestpractice / clever solution
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }
