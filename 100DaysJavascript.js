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

// Write a function generatehash that generate a hash tag from a given input string.If the length of the input string more than 280 charecter or if the input string is empty or contain only white space function should be return false

// const generateHash = (str) => {
//   if (str.length > 280 || str.trim().length === 0) return false;
//   str = str.split(" ");
//   str = str.map((current) =>
//     current.replace(current[0], current[0].toUpperCase())
//   );
//   str = `#${str.join("")}`;
//   return str;
// };

// console.log(generateHash("this is a hashtag generator"));

// Second Mehtod

// const generateHash = (str) => {
//   if (str.length > 280 || str.trim().length === 0) return false;
//   str = str.split(" ");
//   str = str.map(
//     (current) =>
//       current.charAt(0).toUpperCase() + current.slice(1)
//   );
//   str = `#${str.join("")}`;
//   return str;
// };

// console.log(generateHash("this is a hashtag generator"));

//***************************************2nd Question end here******************* */
