// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.



function highAndLow(numbers) {
    const arr = numbers.split(" ")  //.split creates an array
    let maxNum = arr[0]             //set both variables to index 1 of the array
    let minNum = arr[0]

    for(let num of arr) {               //loop through the index and assign maxNum/minnum to highest/lowest number of array 
        if(Number(num) > maxNum) {
            maxNum = num
        }

        if(Number(num) < minNum) {
            minNum = num
        }
    }

    return maxNum + " " + minNum      //return results of max and min
}