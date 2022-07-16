// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    let url2 = url.split('#')[0] //split allows you to set the parameter of the char you want removed (# in this case) and setting array to 0 allows you to grab everything
    return url2 }                // before the #
    
    //best practice solution
    function removeUrlAnchor(url){
        return url.split('#')[0];
      }