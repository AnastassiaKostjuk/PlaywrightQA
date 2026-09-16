// Task 1 - calculate the area of a rectangle

let rectangleLength = 3;
let rectangleWidth = 5;
let rectangleArea;

rectangleArea = rectangleLength * rectangleWidth;
console.log("The area of a rectangles is:", rectangleArea);

// Task 2 - calculate body mass index

let bodyWeigth : number = 55; // kg
let bodyHeight : number = 1.67; // meters
let BMI : number = bodyWeigth / (bodyHeight * 2);
console.log("The BMI is:", BMI);

// Task 3 - convert Celsius to Fahrenheit

let celsiusNumber = 25.5; // celsius
let fahrenheitNumber = (9/5) * celsiusNumber + 32; // fahrenheit
console.log(celsiusNumber + " celsius is equal to " + fahrenheitNumber + " fahrenheit" );

// Task 4 - is age >= 18?

let age : number = 30; // person`s age
let isAdult : boolean = age >= 30;
console.log("Is this person over 18 years old? :", isAdult);

// Task 5 - concatenation of two strings

let firstString : string = "My name is";
let secondString : string = "Hermione";
let sentence : string = firstString + " " + secondString;
console.log(sentence);

// Task 6 - Age verification and strict equality

let userAge : number = 13;
const requiredAge : number = 18;
let hasAcces = userAge === requiredAge;
console.log("Does this person has acces: " + hasAcces);

let userAge2 : number = 18;
const requiredAge2 : number = 18;
let hasAcces2 = userAge2 === requiredAge2;
console.log("Does this person has acces: " + hasAcces2);

// Task 7 - Age verification and strict equality of different types

let userInput : string = '18';
let actualAge : number = 18;
//let isEqualLoose= userInput == actualAge; // возникает ошибка!
//let isEqualStrict = userInput === actualAge; // возникает ошибка!

// Task 8 - Type conversion from string to number

let stringNumber : string = '370';
let convertedStringToNumber : number = Number(stringNumber);
console.log("String value is:", stringNumber);
console.log("Converted string value to number is:", convertedStringToNumber);

// Task 9 - Type conversion from number to string

let numberNumber : number = 48652;
let convertedNumberToString : string = String(numberNumber);
console.log("Number is:", numberNumber);
console.log("Converted number to string is:", convertedNumberToString);





