// task 1 -  Temperature Converter

function convertToFahrenheit ( celsius : number) : number {
    const result : number = (celsius * 9/5) + 32;
    return result;
}

console.log(convertToFahrenheit(32))

// task 2 - Greeting Generator

function greetUser ( firstName : string, lastName : string) : string {
    const result : string = "Hello, " + firstName + " " + lastName;
    return result;
}

console.log(greetUser("Hermione", "Granger"));

// task 3 -  Rectangle Area Calculator

function  calculateArea (width : number, height : number) : number {
    const result : number = width * height;
    return result;
}

console.log(calculateArea(8, 9))

// task 4 - Simple Sum

function addNumbers (a : number, b : number) : number {
    return a + b;
}

console.log(addNumbers(8, 24965))

