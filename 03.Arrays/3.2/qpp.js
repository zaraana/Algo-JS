let array = [1, 2, 6, 7];
let result = 0;
for (let element of array){
    result = result + element;
}
let average = result / array.length;
console.log(average);
