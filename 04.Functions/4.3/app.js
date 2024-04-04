/**
 * Generate random numbers between num.
 * @param {number} min - a minum value.
 * @param {number} max - a max number.
 * @returns {number} a random integer between 2 num.
*/

function rand10(min, max){

return Math.ceil(Math.random() * (max - min)) + min;

}

/**
 * Generate an array of numbers between 2 nu
 * @param {number} n - the number of numbers.
 * @returns {number} a array of n numbers between 2 num.
*/

function multiRand(n){
    let array = [];
    for (i = 1; i <= n; i ++){
        let randomNumber = rand10(1, 10);
        array.push(randomNumber);
    }
    return array;
}

let array = multiRand(4);
console.log(array);

