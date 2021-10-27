function findLongestWordLength(str) {
  let newStr = str.split(" ")
  let longestWord = 0
  newStr.forEach((elem) => {
    if(elem.length > longestWord) longestWord = elem.length
  })
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");