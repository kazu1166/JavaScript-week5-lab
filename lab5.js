// Function Challenges

// Challenge 1

/*
Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.

You can make the output look prettier by putting it into a string. You can even add `\xB0` (degrees) and a `C` in front of the celsius temperature.

**Hints:**
The formula for Fahrenheit to Celsius is `(F - 32) * 5 / 9`. 
Read more about the formula [here](https://www.cuemath.com/fahrenheit-to-celsius-formula/) if needed.

*/

let fahrenheit = prompt("Please input a temperature in fahrenheit: ");

/*
function getCelsius(fahrenheit) {
  console.log(`You input ${fahrenheit} \xB0F`);
  let celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(`The temperature is ${celsius.toFixed(2)} \xB0C`);
}

getCelsius(fahrenheit);
*/

// For bonus points, write it as a one line arrow function
let getCelsiusArrow = (fahrenheit) =>
  `The temperature is ${(((fahrenheit - 32) * 5) / 9).toFixed(2)} \xB0C`;

console.log(`You input ${fahrenheit} \xB0F`);
console.log(getCelsiusArrow(fahrenheit));

/*
## Challenge 2

**Instructions:**

Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

**Expected Result:**

```JavaScript
console.log(minMax([1, 2, 3, 4, 5]));
// { min: 1, max: 5 }
````

**Hints:**

1.  You can use `Math.min()` and `Math.max()` to get the min and max of a list of numbers.
2.  You can use the Spread `...` operator to spread the values of an array into separate arguments.
*/

let numbers = [10, 2, 34, 42, 5];

let minMax = (numbers) => ({
  min: Math.min(...numbers),
  max: Math.max(...numbers),
});

console.log(`Among the numbers: ${numbers}`);
console.log(minMax(numbers));

/*
## Challenge 3

Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.

**Expected Result:**

```JavaScript
// On page load
The area of a rectangle with a length of 10 and a width of 5 is 50.
````

**Hints:**

1.  The area of a rectangle is `length * width`. These should get passed into the IIFE as arguments.
2.  You do not have to return anything from this function, just log to the console.
*/

(function () {
  const length = 10;
  const width = 5;
  const area = length * width;
  const rectangle = () =>
    console.log(
      `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`
    );
  rectangle();
})();
