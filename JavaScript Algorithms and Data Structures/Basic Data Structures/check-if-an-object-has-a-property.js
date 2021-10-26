let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  let members = [ 'Alan', 'Jeff', 'Sarah',  'Ryan'];
  let params = 0
  members.forEach((elem) => {
    if(elem in userObj) params++
  })
  if(params == 4) return true
  else return false
}

console.log(isEveryoneHere(users));