// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
  // TODO
  
  //switch para atender os 5 casos diferentes possiveis
  switch (names.length) {
      case 0: //array com 0 nomes
        return "no one likes this"
        break
      case 1: //array com 1 nome
        return `${names[0]} likes this`
        break
      case 2: //array com 2 nomes
        return `${names[0]} and ${names[1]} like this`
        break
      case 3: //array com 3 nomes
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
        break
      default: //array com 4 nomes ou mais
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}
