function truncateString(str, num) {
  let lenStr = str.length
  let newStr = ""
  if(lenStr > num || lenStr === num) {
    for(let i = 0; i < num; i++) {
      newStr += str[i]
    }
  } else if(lenStr < num) {
    for(let i = 0; i < lenStr; i++) {
      newStr += str[i]
    }
  }
  if(lenStr > num) newStr += "..."
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);