
/*
 * Name : Kashif Umar
 */
let friends = ["Ali", "Aneeq", "Fawad"];
for (let i = 0; i < friends.length; i++) {
  console.log(
    "Hello " +
    friends[i] +
    " I would like to invite you to join me on dinner"
  );
}
console.log("Seems Anneq is not available");
friends[1] = "Adnan";
console.log("New List");
for (let i = 0; i < friends.length; i++) {
  console.log(
    "Hello " +
    friends[i] +
    " I would like to invite you to join me on dinner"
  );
}
console.log("Found a Bigger Dinner Table SO now Inviting More Friends");

friends.unshift("Adil");
friends.splice(friends.length / 2, 0, "Rizwan");
friends.push("Musa");

console.log("Updated List");

for (let i = 0; i < friends.length; i++) {
  console.log(
    "Hello " +
    friends[i] +
    " I would like to invite you to join me on dinner"
  );
}
