// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//solution
function isTriangle(a,b,c)
{
  if (a === 0 || b === 0 || c === 0){ //if any value is a 0, it automatically can not be true
    return false;
  }
  else if (a + c <= b){ //no side of a triangle can exceed the sum of the other two sides
   return false;
  }
  
  else if ( b + c <= a){
    return false;
    }
  else if (a + b <= c){
    return false;
  }
  return true; //if all conditions are met, return true
}

//best practice/ clever solution
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}
