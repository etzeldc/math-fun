// SUM
var sum = 0;
function getSum() {
    addThis = Number($('#addThis').val());
    $('#addThis').val("");
    sum = sum + addThis;
    $('#sumOutput').empty();
    $('#sumOutput').append(sum);
    $('#sumClear').show();
}

function sumClear() {
    $('#sumOutput').empty();
    $('#sumClear').hide();
}

// AVERAGE
var avgSum = 0;
var number = 0;
function getAvg() {
    avgThis = Number($('#avgThis').val());
    $('#avgThis').val("");
    $('#avgOutput').empty();
    avgSum = avgSum + avgThis;
    number = number + 1;
    newAvg = avgSum / number;
    $('#avgOutput').append(newAvg);
    $('#avgClear').show();
}

function avgClear() {
    $('#avgOutput').empty();
    $('#avgClear').hide();
}

// SQUARE AND CUBE
function square() {
    square = Number($('#sqcube').val()) * Number($('#sqcube').val());
    $('#sqcube').val("");
    $('#sqOutput').empty();
    $('#sqOutput').append(square);
    $('#sqCubeClear').show();
}

function cube() {
    cube = Number($('#sqcube').val()) * Number($('#sqcube').val()) * Number($('#sqcube').val());
    $('#sqcube').val("");
    $('#cubeOutput').empty();
    $('#cubeOutput').append(cube);
    $('#sqCubeClear').show();
}

function sqCubeClear() {
    $('#sqOutput').empty();
    $('#cubeOutput').empty();
    $('#sqCubeClear').hide();
}

// PYTHAGOREAN 
function hypotenuse() {
    sideA = Number($('#sideA').val());
    sideB = Number($('#sideB').val());
    hypot = Math.sqrt((sideA * sideA) + (sideB * sideB));
    $('#sideA').val("");
    $('#sideB').val("");
    $('#hypotOutput').empty();
    $('#hypotOutput').append(hypot);
    $('#hypotClear').show();
}

function hypotClear() {
    $('#hypotOutput').empty();
    $('#hypotClear').hide();
}

// EXPONENTS
function exponent() {
    base = Number($('#base').val());
    power = Number($('#power').val());
    product = 1;
    for (var i = 0; i < power; i++) {
        product = product * base;
    };
    $('#base').val("");
    $('#power').val("");
    $('#expOutput').empty();
    $('#expOutput').append(product);
    $('#expClear').show();
}

function expClear() {
    $('#expOutput').empty();
    $('#expClear').hide();
}

// CALCULATOR KEYS
var screen = "";
var memory = 0;
var operation = "";
function ac() {
    screen = "";
    memory = 0;
    operation = "";
    $('#calcOutput').empty();
}

// Number first, or just splice the string?
// function invert() {
//     screen = screen + "9";
//     $('#calcOutput').empty();
//     $('#calcOutput').append(screen);
// }

// Splice a period two before the end (toggle on/off)
// function percent() {
//     screen = screen + "9";
//     $('#calcOutput').empty();
//     $('#calcOutput').append(screen);
// }

function divide() {
    memory = screen;
    screen = "";
    operation = "/";
    $('#calcOutput').empty();
}

function seven() {
    screen = screen + "7";
    $('#calcOutput').empty();
    $('#calcOutput').append(screen);
}

function eight() {
    screen = screen + "8";
    $('#calcOutput').empty();
    $('#calcOutput').append(screen);
}

function nine() {
    screen = screen + "9";
    $('#calcOutput').empty();
    $('#calcOutput').append(screen);
}

function multiply() {
    memory = screen;
    screen = "";
    operation = "*";
    $('#calcOutput').empty();
}

function four() {
    screen = screen + "4";
    $('#calcOutput').empty();
    $('#calcOutput').append(screen);
}
function five() {
    screen = screen + "5";
    $('#calcOutput').empty();
    $('#calcOutput').append(screen);
}
function six() {
    screen = screen + "6";
    $('#calcOutput').empty();
    $('#calcOutput').append(screen);
}

function subtract() {
    memory = screen;
    screen = "";
    operation = "-"
    $('#calcOutput').empty();
}

function one() {
    screen = screen + "1";
    $('#calcOutput').empty();
    $('#calcOutput').append(screen);
}
function two() {
    screen = screen + "2";
    $('#calcOutput').empty();
    $('#calcOutput').append(screen);
}
function three() {
    screen = screen + "3";
    $('#calcOutput').empty();
    $('#calcOutput').append(screen);
}

function add() {
    memory = screen;
    screen = "";
    operation = "+";
    $('#calcOutput').empty();
}

function zero() {
    screen = screen + "0";
    $('#calcOutput').empty();
    $('#calcOutput').append(screen);
}

// Slice the end of the string
function backspace() {
    screen = screen
    $('#calcOutput').empty();
    $('#calcOutput').append(screen);
}

function decimal() {
    if (screen === "") {
        screen = screen + "0.";
    } else {
    screen = screen + ".";
    }
    $('#calcOutput').empty();
    $('#calcOutput').append(screen);
}

// Operations are covered in the if conditions
// function equals() {
//     result = memory + operation + screen;
// }

// // tests
// console.log(screen);
// console.log(memory);
// console.log(operation);