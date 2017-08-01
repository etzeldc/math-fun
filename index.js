// AVERAGE
var sum = 0;
var number = 0;
function average(num) { //declares a function where whatever number value is entered in the placeholder will be run through the code
    sum = sum + num; //that value is added to the running total for all values entered into the placeholder
    number = number + 1; //if a value is passed, one is added to the count of how many values have been entered too
    return sum / number; //returns number
}

console.log(average(3));
console.log(average(4));
console.log(average(5));
console.log(average(6));
console.log(average(7));

// // SQUARE
// function square(x){
//     return x * x;
// }
// $('#sqcube').

// // CUBE
// function cube(x) {
//     return x * x * x;
// }
// $('#sqcube').

// // PYTHAGOREAN 
// function hypotenuse(x, y) { //declares a function with two placeholders
//     return Math.sqrt((x * x) + (y * y)); //takes the two entered values and goes all pythagorus on them
// } //end function