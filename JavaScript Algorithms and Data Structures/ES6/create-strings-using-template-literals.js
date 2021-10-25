const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  let failureItems = [];
  arr.forEach((elemets) => {
    let stringLiterals = `<li class="text-warning">${elemets}</li>`;
    failureItems.push(stringLiterals);
  })
  return failureItems;
}

const failuresList = makeList(result.failure);