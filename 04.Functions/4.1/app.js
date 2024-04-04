/**
 * Calculates the surface of a rectangle.
 * @param {number} lenght - lenght of rectangle
 * @param {number} width - width of rectangle.
 * @returns {number} The surface of a rectangle.
*/
function calcsurface(lenght, width){
    return lenght * width;
}

let lenght = prompt('Please enter the lenght of your rectangle?');
let width = prompt('Please enter the width of your rectangle?');

let surface = calcsurface(length, width);
console.log(surface);