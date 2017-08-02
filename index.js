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