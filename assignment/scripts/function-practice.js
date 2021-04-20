console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName( name ) {
  return name;
}
// Remember to call the function to test
console.log(`Hello, ${helloName('James')}`);

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}
console.log('Running addNumbers with numbers 5 + 5 should return 10:',
 addNumbers(5, 5));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3) {
  let answer = (num1 * num2) * num3;
  return answer;
}

console.log('Running multiplyThree with numbers 3 * 3 * 3 should return 27:',
 multiplyThree(3, 3, 3));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ) {
    return true;
  } else {
    return false;
  }
}

// console.log(`1 returns ${isPositive(1)} and 0 returns ${isPositive(0)}.`);

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let trainStation = ['MSP', 'NY', 'LA'];
let homesForSale = [];
function getLast( array ) {
  return array[array.length - 1]; // grabs the length of array and returns last item
}

console.log('Last item of trainStation:', getLast(trainStation));
console.log('homesForSale should return undefined:', getLast(homesForSale));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

let bandNames = ['In Flames', 'Tool', 'Slipknot', 'Pink Floyd']

function find( value, array) {
  for(let x = 0; x < array.length; x++) {
    if(array[x] === value) {
      return true;
    }
  }
  return false;
}

console.log('Is Tool in bandNames:', find('Tool', bandNames));
console.log('Is Mudvayne in bandNames:', find('Mudvayne', bandNames));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  if (letter === string.charAt(0)) {
    // this method checks to see if the value letter is at the first index of the string
    return true;
  }
  return false;
}


// function isFirstLetter(letter, string) {
//   let stringSplit = string.split('');
//   if (letter === stringSplit[0]){
//     return true;
//   }
//   return false;
// }

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

let numbersInArray = [5, 5, 5, 5];
let arrayCountFive = [3, 5, 7, 9, 11]

function sumAll( array ) {
  let sum = 0;
  // TODO: loop to add items
  for (let x = 0; x < array.length; x++){
    sum += array[x]; // adding each value to the sum as it iterates through the array
  }
  return sum;
}

console.log(`The sum of 5 + 5 + 5 + 5 is ${sumAll(numbersInArray)}.`);
console.log(`The sum of 3 + 5 + 7 + 9 + 11 is ${sumAll(arrayCountFive)}.`);
console.log(`The sum of 2 + 2 + 2 is ${sumAll([2, 2, 2])}.`);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
