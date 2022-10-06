 //Return the average of the given array rounded down to its nearest integer.
 function getAverage(arr){
  
    //     let sum = arr.reduce((a,c)=> a + c)
        
    //     return Math.floor(sum / arr.length)
      
        return Math.floor(arr.reduce((a,c)=> a + c)/ arr.length)
    }