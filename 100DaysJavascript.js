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

// Write a function called countCharacter that takes two parameters: a string (str) and a character (char). The function should return the number of times the specified character appears in the string.

// const countCharacter = (str, char) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(countCharacter("banana", "a"));


// Method 2nd ////

// const countCharacter2 = (str,char) => {
//  return str.split(char).length -1
// }

// console.log(countCharacter2("tomato", "t"));

//*****************3rd Question end here ***************************************** */

// Write a function checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: 'Equilateral', 'Isosceles', or 'Scalene'. If the given sides cannot form a valid triangle, the function should return 'Not a valid triangle'.

// const checkTriangleType = (a, b, c) => {
//   if (a + b <= c || a + c <= b || b + c <= a) return "Not a valid triangle";

//   if (a === b && b === c) {
//     return "Equilateral";
//   } else if (a === b || b === c || a === c) {
//     return "Isosceles";
//   } else {
//     return "Scalene";
//   }
// };

// console.log(checkTriangleType(1, 1, 1)); 
// console.log(checkTriangleType(2, 2, 3)); 
// console.log(checkTriangleType(3, 4, 5)); 

//************************ 4th question end here************************* */

// write a function sortAscending to  sort an array of number in ascending and Descending order

// const  sortAscending = (arr) => {
//      return  arr.sort((a,b) => a-b)
// }

// console.log(sortAscending([12,10,5,8]));

// ************************ 5th question end here ***********************//

/// How do you check if a string or number is a palindrome in JavaScript?

// const isPalindrome = (str) => {
//  const cleanStr = str.toLowerCase().replace(/\W/g, "")
//  const reversedStr = str.split("").reverse().join("")
//  return cleanStr === reversedStr
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("A man, a plan, a canal: Panama"))

// For Number

// const isPalindrome = (num) => {
//  const cleanStr = num.toString()
//  const reversedStr = cleanStr.split("").reverse().join("")
//  return cleanStr === reversedStr
// }

// console.log(isPalindrome(121));

//// ************************************** 6th question end here**********************

// Write a function findMax that takes a array of numbers as input and return the maximum number in the  array


// const findMax = (arr) => {
//   return Math.max(...arr)
// }

// console.log(findMax([2,3,4,5]));

// Second Method

// const findMax = (arr) => {
//   if(arr.length === 0) return undefined
//   let max = arr[0]

//   for(let i = 1; i < arr.length; i++){
//      if(arr[i] > max){
//           max = arr[i]
//      }
//   }
//   return max
// }

// console.log(findMax([2,10,21,4,12]));





