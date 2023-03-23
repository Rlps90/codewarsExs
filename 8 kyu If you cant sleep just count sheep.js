// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  let str = ""
  
  //se valor = 0
  if (num == 0) {
      return str
  }
  
  //se valor > 0, repete de 1 até o numero passado
  for (i = 1; i <= num; i++) {
    str += `${i} sheep...`
  }
  
  return str
}
