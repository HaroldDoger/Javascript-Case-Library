// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


//my solution - Only works with a set amount of chars, ex. sumo, omo would return true when it should be false
function solution(str, ending){
    if (str.charAt(str.length - 1) === ending.charAt(ending.length-1) ){
      return true;
    }
    else {
      return false;
    }
  }

//Answer Solution
function solution(str, ending){
    if(ending.length == 0) return true;
    return str.substr(-(ending.length)) == ending
}

//best practice and clever
function solution(str, ending){
    return str.endsWith(ending);
  }