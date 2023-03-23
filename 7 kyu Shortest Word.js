// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  let shortestWord = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  let separateWords = s.split(' ')
  
  for(i = 0; i < separateWords.length; i++) {
    if (separateWords[i].length < shortestWord.length) {
      shortestWord = separateWords[i]
    }
  }
  return shortestWord.length
}
