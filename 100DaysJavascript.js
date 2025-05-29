// write a function findlongestword that takes a string and return the longest word in the string i f there are multiple longest word return the first one encountered

// if the input string is empty or contain only whitespace  so function return false

// const FindLargestWord = (str) => {
//   if (!str.trim()) return false;
//   const words = str.trim().split(" ");
//   let longest = "";
//   for (const word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// };
// console.log(FindLargestWord("This is a javascript"));

//Second method

// const FindLargestWord = (str) => {
//   if (str.trim().length === 0) return false;

//   return str
//     .split(" ")
//     .reduce(
//       (longest, current) =>
//         current.length > longest.length ? current : longest,
//       ""
//     );
// };
// console.log(FindLargestWord("This is a longest word"));


//****************************************FIRST QUESTION END HERE************************* */