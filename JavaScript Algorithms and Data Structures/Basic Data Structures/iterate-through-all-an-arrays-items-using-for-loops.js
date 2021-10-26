function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  arr.forEach((elem1) => {
    let i = 0
    let params = 0
    elem1.forEach((elem2) => {
      if(elem == elem2) {
        params++
      } 
      i++
    })
    if(params == 0)newArr.push(elem1)
  })
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); 