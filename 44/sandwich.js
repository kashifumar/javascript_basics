
function make_sandwich(items) {
  console.log("------------------");
  console.log("The Sandwich Must Have");
  for (let i in items) {
    console.log(items[i]);
  }
}
let items1 = [
  "BBQ Chicken",
  "Salsa Sauce",
  "Iceberg",
  "Tomatoes",
  "Cheese",
];
let items2 = ["Breast Chicken", "Onion", "Tomato", "Spicy Red Sauce"];
let items3 = ["smashed beef patties", "gherkins", "cheese sauce"];

make_sandwich(items1);
make_sandwich(items2);
make_sandwich(items3);
