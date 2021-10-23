// Only change code below this line
function countdown(n){
  if(n < 1) {
    return []
  } else {
    const countArray = countdown(n - 1);
    countArray.push(n);
    return countArray.sort((f, s) => s - f);
  }
}
console.log(countdown(4));
// Only change code above this line
