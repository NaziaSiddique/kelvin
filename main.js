// create a constant variable and assigned the value 293
const kelvin = 293;
// create a variable called celsius and assign it kelvin subtracted by 273
const celsius = kelvin - 273;
// create a variable and assign the following equation
let fahrenheit = celsius * (9 / 5) + 32;
// rounding the answer down to the integer 
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
