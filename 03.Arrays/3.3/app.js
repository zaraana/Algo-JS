let array = [3, 7, 8, 9, 33];

let duplicatedArray = array;
console.log(duplicatedArray);
// first method

duplicatedArray = [];
for (let element of array){
    duplicatedArray.push(element);
}
//second method

duplicatedArray = array.slice();
console.log(duplicatedArray);
//third method