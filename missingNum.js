// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).
function findDeletedNumber(arr, mixArr) {
  if(mixArr.length == arr.length)
    {
      return 0;
    }
  else{
    return arr.reduce((a, c) => a + c, 0)
    - mixArr.reduce((a, c) => a + c, 0);
  }
  
}

//"Obvious solution but less efficient"
function findDeletedNumber(arr, mixArr) {
  return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
}
