/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

//console.log("Welcome to the bootcamp

//Correct code
console.log("Welcome to the bootcamp");
/*
 Syntax error : by reading the error message it is clear that,
 it is missing closing quotation marks and parantheses and semicolon.
*/

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.
/*
let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}
*/

//Runtime error - as "eight" is a string when we multiply with 2 the result is NaN 
//solution - creating an array with only numbers should work perfectly

let numbers = [2, 4, "10"]; // directly a number could be added or number as string type can also be added
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2; // implicit conversion of string to number type before the multiplication 
  console.log(doubled);
}

// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.
/*
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;  // Supposed to indicate num is NOT prime
    }
  }
  return false; // Supposed to indicate num IS prime
}
console.log(isPrime(7)); // Expected true but gets false
*/
// Logic Error - as wrong return boolean values were assigned to the logic
// Updated code
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;  
      //If the reminder after division with 2 is 0 it indicates the given number is not prime 
      //so it should return false but not true

    }
  }
  return true; // indicates the number is prime

}
console.log(isPrime(7)); // return true as 7 is a prime number
console.log(isPrime(11));// return true as 11 is a prime number
console.log(isPrime(4)); // returns false
