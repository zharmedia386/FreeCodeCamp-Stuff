function confirmEnding(str, target) {
  let lenTarget = target.length
  let lenStr = str.length
  let params = 0
  for(let i = lenStr - 1; i >= lenStr - lenTarget; i--) {
    for(let j = lenTarget - 1; j >= 0; j--) {
      if(str[i] === target[j]) params++
    }
  }
  return params === lenTarget ? true : false;
}

confirmEnding("Bastian", "n");