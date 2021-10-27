function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let falsyArr = [0, "", NaN, undefined, false, null];
  let newArr = arr.filter(ele => !falsyArr.includes(ele));
  return newArr
}

console.log(bouncer([7, "ate", "", false, 9, 0]));