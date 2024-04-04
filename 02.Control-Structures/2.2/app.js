(() => {
   let min = new Number(prompt("Please enter a min number"));
 
   let max = new Number(prompt("Please enter a max number"));
  
   let current = new Number(prompt("Please enter a current number"));


   if (min > max) {
    console.log("Guess who skipped maths classes 😂");
   }
else if ((current > min) && (current < max) && (min < max)) {
console.log(`All right ${current} is in between!`);
}
else {
    console.log("www.sosmaths.com");
}
})();