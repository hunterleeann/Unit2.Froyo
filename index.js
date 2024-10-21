var flavors = prompt(
  "Enter in your froyo flavors. Please add a comma after each flavor."
);

const flavorArray = flavors.split(",");

const count = {};

for (const flavor of flavorArray) {
  if (count[flavor]) {
    count[flavor] += 1;
  } else {
    count[flavor] = 1;
  }
}
console.log(count);
