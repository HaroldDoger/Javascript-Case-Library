// Your task is to remove all consecutive duplicate words 
// from a string, leaving only first words entries. 
// For example:
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

function removeConsecutiveDuplicates(str){
  return str.split(" ").filter((w,i,a) => w != a[i-1]).join(" ")
}

//arrow function solution
const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");
