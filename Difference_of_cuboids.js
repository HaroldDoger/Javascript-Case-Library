// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function findDifference(a, b) {
    //your code here
    let outputA = 1
    let outputB = 1
    
    for (let i = 0; i < a.length; ++i) { 
    outputA *= a[i]; 
  } 
    for (let i = 0; i < b.length; ++i) { 
    outputB *= b[i]; 
  } 
    
    return Math.abs(outputA - outputB); //Math.abs needs absolute value when subtracting to avoid negative answers
  }


//best practice | one line solution
function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }