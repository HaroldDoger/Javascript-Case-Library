// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.
function areYouPlayingBanjo(name) {
    name.charAt(0) == 'r' || name.charAt(0) == 'R' ? name = name + " plays banjo" :  name = name + " does not play banjo"
    return name;
    }