(() => {
const prompt = require('prompt-sync')();

let n = Number(prompt("Please enter how many n you choose: "));

var result = 0;

for (let i = 1; i <= n; i++) {
let number = Number(prompt("Type the chosen n: "));
result = result + number
}
console.log(result)
})();

//This needs to be checked!!!!!!