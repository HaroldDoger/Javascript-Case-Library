// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
    h = h * 3600000 //converts hours into milliseconds which is 3.6 million per hour
    m = m * 60000   //converts minutes into milliseconds
    s = s * 1000    //converts seconds into milliseconds

    return h + m + s //returns the output of all 3 variables together
  }

  //best practice / clever solution
//   function past(h, m, s){
//     return ((h*3600)+(m*60)+s)*1000;
//   }