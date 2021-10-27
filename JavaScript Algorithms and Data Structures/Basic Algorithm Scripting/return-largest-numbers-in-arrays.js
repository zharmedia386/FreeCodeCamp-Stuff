function largestOfFour(arr) {
  let largestNumber = -100;
  let newArr = []
  arr.forEach((elem) => {
    elem.forEach((elem1) => {
      if(elem1 > largestNumber) largestNumber = elem1
    })
    newArr.push(largestNumber)
    largestNumber = -100
  })
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);