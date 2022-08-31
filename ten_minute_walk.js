//You live in the city of Cartesia where all roads are laid out in a perfect grid. 
//You arrived ten minutes too early to an appointment, so you decided to take the opportunity 
//to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- 
//everytime you press the button it sends you an array of one-letter strings representing directions 
//to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) 
//and you know it takes you one minute to traverse one city block, so create a function that will return true if 
//the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, 
//of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  //1 block = 1 minute
 //if walk equals 10 minutes return true
  //if not, then false
  //must return to starting spot
  //create to seperate variables of direction , N/S , and W/E
  //both these variables need to equal 0 for it to be true
  let norso =0, wesea = 0;
  for (let dir of walk){
    if (dir == 'n') norso += 1;
    if (dir == 's') norso -= 1;
    if (dir == 'w') wesea += 1;
    if (dir == 'e') wesea -= 1;
  }
  return walk.length == 10 && norso === 0 && wesea === 0;
}
