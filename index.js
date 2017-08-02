// AVERAGE
var sum = 0;
var number = 0;
function getAvg() {
    var addThis = Number($('#addThis').val());
    $('#addThis').val("");
    $('#avgOutput').empty();
    sum = sum + addThis;
    number = number + 1;
    newAvg = sum / number;
    $('#avgOutput').append(newAvg);
}

// SQUARE
function square() {
    var square = Number($('#sqcube').val()) * Number($('#sqcube').val());
    $('#sqOutput').empty();
    $('#sqOutput').append(square);
}

 // CUBE
function cube() {
    var cube = Number($('#sqcube').val()) * Number($('#sqcube').val()) * Number($('#sqcube').val());
    $('#cubeOutput').empty();
    $('#cubeOutput').append(cube);
}

// PYTHAGOREAN 
function hypotenuse() {
    var sideA = Number($('#sideA').val());
    var sideB = Number($('#sideB').val());
    var hypot = Math.sqrt((sideA * sideA) + (sideB * sideB));
    $('#hypotOutput').empty();
    $('#hypotOutput').append(hypot);
}