// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  //transforms alphabet into array of letters
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  
  //transforms everything to lower case, then transforms into array, 
  //then transforms into numbers from 1 to 26, remove characters outside a-z and then joins them for formatting purposes
  const textPosition = text
    .toLowerCase()
    .split("")
    .map(char => char.charCodeAt(0) - 96)
    .filter(x => x >= 1 && x <= 26)
    .join(" ")
  
  return textPosition;
}
