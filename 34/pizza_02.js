
let pizzas = [
  "Hot Chicken Mughlai",
  "Chicken Fajita",
  "Eastern Seekh Kabab",
];
if (pizzas.length > 0) {
  for (let i = 0; i < pizzas.length; i++) {
    console.log("I really like " + pizzas[i] + " Pizza");
  }
  console.log(
    "I Like " +
    pizzas[0] +
    " Pizza the most.\nIts very juicy and saucy.\nIt is not too much spicy.\nI really Love Pizza!"
  );
} else {
  console.log("List is empty");
}
