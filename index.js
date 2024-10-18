// const froyo = {
//   vanilla: 3,
//   coffee: 2,
//   strawberry: 1,
// };

//console.log(froyo.vanilla);
//console.log(froyo.coffee);
//console.log(froyo.strawberry);

const userInputString = prompt("Please select some flavor.", "Vanilla");

const stringArray = userInputString.split(",");

const count = {};
for (const element of stringArray) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}
console.log(count);
// console.log(count);
// console.log();
// console.log();
//
