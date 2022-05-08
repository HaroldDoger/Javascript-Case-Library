// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function index(array, n){
    //your code here
    if (array.length <= n || 0 > n){
      return -1
    }
    
    else{
     return Math.pow(array[n], n); //math method provides basic math functions, Math.pow gives you the power of the base and the exponent
    }
      
  }

  //short hand solution
  const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;

  //clever solution
  function index(array, n){
    return array[n] ** n || -1;
  }