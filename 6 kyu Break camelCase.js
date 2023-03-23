// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    //separates words where lowercase character is followed by an uppercase character
    string = string.replace(/([a-z])([A-Z])/g, "$1 $2")
  
    //returns the string separated by space as requested
    return string.replace(/\s/, " ")
}
