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
  return `Hello ${name}`;
}
// Remember to call the function to test
console.log('Test - should say "Hello James"', helloName('James'));

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
  // Here we create a local variable answer and ask it to multiply three
  // sets of numbers for us.
  let answer = (num1 * num2) * num3;
  return answer;
}

console.log('Running multiplyThree with numbers 3 * 3 * 3 should return 27:',
 multiplyThree(3, 3, 3));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  // Any number that is put into our function will return true for us,
  // if not positive it will return false when we call isPositive.
  if ( number > 0 ) {
    return true;
  } else {
    return false;
  }
}

// console.log(`1 returns ${isPositive(1)} and 0 returns ${isPositive(0)}.`);

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3));
console.log( 'isPositive - should say false', isPositive(0));
console.log( 'isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let trainStation = ['MSP', 'NY', 'LA'];
let homesForSale = [];
function getLast( array ) {
  return array[array.length - 1]; // grabs the length of array and returns last item
}

// Here are a couple of test to show that the function works.
console.log('Last item of this array should return duck:', getLast(['moose', 'hen', 'duck']));

console.log('Last item of trainStation:', getLast(trainStation));
console.log('"homesForSale" should return undefined:', getLast(homesForSale));

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

console.log(bandNames); // console log the names so it easy to see true or false.
console.log('Is Tool in bandNames:', find('Tool', bandNames));
console.log('Is Mudvayne in bandNames:', find('Mudvayne', bandNames));
console.log('Is Jay-Z in bandNames:', find('Jay-z', bandNames));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise


function isFirstLetter(letter, string) {
  // This expression checks to see if the value letter is at the first index of the string.
  if (letter === string.charAt(0)) {
    return true;
  }
  return false;
}

// Below is another way this could be done. I'm sure there are several ways to do this.
// These were the two I came up with.

// function isFirstLetter(letter, string) {
      // Below we split the letters of the string into an array.
//   let stringSplit = string.split('');
      // The expression below checks the letter and first index of the array we created.
//   if (letter === stringSplit[0]){
//     return true;
//   }
//   return false;
// }

console.log( 'isFirstLetter - should return true for the letter "a"', isFirstLetter('a', 'apple'));
console.log( 'isFirstLetter - should return false for the letter "z"', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array

let numbersInArray = [5, 5, 5, 5];
let arrayCountFive = [3, 5, 7, 9, 11]

function sumAll( array ) {
  // Below we set our local variable to add to.
  let sum = 0;
  // TODO: loop to add items
  // The expression below will allow us to look at the whole array and iterate through
  // each value.
  for (let x = 0; x < array.length; x++){
    sum += array[x]; // Adding each value to the sum as it iterates through the array
  }
  return sum;
}

console.log('The sum of 5 + 5 + 5 + 5 is:', sumAll(numbersInArray));
console.log('The sum of 3 + 5 + 7 + 9 + 11 is:', sumAll(arrayCountFive));

// Below console log shows that you can call the function and input your desired numbers in.
console.log('The sum of 2 + 2 + 2 is:', sumAll([2, 2, 2]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



function areWePositive(yourNumberArray) {
  // We need to create an empty array to store our values in as we don't want want
  // to change the input array.
  let positiveArray = [];
  for (let x = 0; x < yourNumberArray.length; x++) {
    // Below we state that if a number is positive, we'll push it to our
    // new array we created without changing the original one.
    if (yourNumberArray[x] > 0) {
      positiveArray.push(yourNumberArray[x]);
    }
  }
  return positiveArray;
}

console.log('Return all positive numbers:', areWePositive([-1, -4, 5, 9, 11]));
console.log('Returns an empty array, since all numbers are negative:', areWePositive([-1, -33, -44, -55]));
console.log('Return an empty array with our function:', areWePositive([]));

let positiveNums = [0, 4, -22, 6, 9];
console.log('Return positive numbers with the positiveNums array we created:', areWePositive(positiveNums));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!


// Question from codewars.

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of
// water per hour of cycling. You get given the time in hours and you need to return
// the number of litres Nathan will drink, rounded to the smallest value.
//

// Examples that were given.

// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function litres(time) {
  const litresPerHour = .5; // Created our constant variable since he drinks half a litre an hour.
  let sumTime = litresPerHour * time; // Here we multiply our intake per hour and time.
  // To return the smallest rounded value, we use a built in method from Math,
  // it gives the value rounded down.
  // If they asked for the number to be rounded up, we could have used Math.ceil()
  return Math.floor(sumTime);
}

// Let's show our work in action

console.log('2 should return 1:', litres(2));
console.log('2 should return 0:', litres(1.4));
console.log('2 should return 6:', litres(12.3));
console.log('2 should return 0:', litres(0.82));
console.log('2 should return 5:', litres(11.8));
console.log('2 should return 893:', litres(1787));
console.log('2 should return 0:', litres(0));
