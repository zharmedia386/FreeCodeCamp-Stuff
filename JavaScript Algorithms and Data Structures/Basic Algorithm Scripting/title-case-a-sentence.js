String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function titleCase(str) {
  let temp = str.toLowerCase()
  let splitStr = temp.split(" ")
  let newSplitStr = ""
  splitStr.forEach((elem,index) => {
    let tempElem = elem.replaceAt(0,elem[0].toUpperCase())
    newSplitStr += tempElem
    if(index != splitStr.length - 1) newSplitStr += " "
  })
  return newSplitStr;
}

titleCase("I'm a little tea pot");