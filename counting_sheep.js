// Consider an array/list of sheep where some sheep may be missing from their place. 
// we need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

function countSheeps(arrayOfSheep) {
   let counter = 0
    for(i = 0; i < arrayOfSheep.length; i++)
    {
        if(arrayOfSheep[i])
        counter += 1
    }
    return counter;
  }

  //best practice / clever solution
  function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length; //returns number of true boolean responses in array
  }