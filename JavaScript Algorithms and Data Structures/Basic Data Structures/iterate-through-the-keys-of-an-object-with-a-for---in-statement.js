let obj = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let i = 0
  for(let user in usersObj) {
    if(usersObj[user].online === true) i++
  }
  return i
  // Only change code above this line
}

console.log(countOnline(obj))