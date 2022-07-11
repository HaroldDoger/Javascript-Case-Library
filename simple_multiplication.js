// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if(number % 2 == 0){ //if modulus 2 equal 0, that means the number is even
        return number = number * 8      
    }
    else{
     return number = number * 9
    }
}


//clever/best practice
// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);  "odd" : "even";
// }


// function simpleMultiplication(n){
//     return n % 2 == 0 ? n * 8 : n * 9  "even" : "odd";
//   }