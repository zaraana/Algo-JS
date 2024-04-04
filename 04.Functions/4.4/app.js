/**
 * Generate random numbers between num.
 * @param {number} min - a minum value.
 * @param {number} max - a max number.
 * @returns {number} a random integer between 2 num.
*/

function rand10(min, max){
    return Math.ceil(Math.random() * (max - min)) + min;
    }

let learners = ["Maryam", "Caylan", "Lyne", "Giovanni"];

function pickLearner(learners, n) {
    let selectedLearners = [];
    for (i = 1; i <= n; i ++){
    let randomNumber = rand10(0, learners.length - 1);
    let selectedLearner = learners[randomNumber];
    selectedLearners.push(selectedLearner);
    learners.splice(randomNumber, 1);
}
return selectedLearners;
}

let selectedLearners = pickLearner(learners, 3);
console.log(selectedLearners);



