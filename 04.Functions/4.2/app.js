/**
 * Generate random numbers between num.
 * @param {number} min - a minum value.
 * @param {number} max - a max number.
 * @returns {number} a raandom integer between 2 num.
*/

function rand10(min, max){

return Math.ceil(Math.random() * (max - min)) + min;

}

let randIntegr = rand10(1, 10);
console.log(randIntegr);

