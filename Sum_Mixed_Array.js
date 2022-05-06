//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.
function sumMix(x){
  
  let result = 0;
  for (let n of x)
  {
    result += parseInt(n);  
  }
  return result;
  
  //short hand answer
  //   return x.reduce((x,y) => Number(x) + Number(y), 0);
}
