function rangeOfNumbers(startNum, endNum) {
  if(startNum == endNum) {
    return [startNum];
  }
  const myArray2 = rangeOfNumbers(startNum + 1,endNum);
  myArray2.push(startNum);
  return myArray2.sort();
};