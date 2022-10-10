
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
console.log("---------------");
console.log("New List");
console.log("---------------");

for (let i = 0; i < friends.length; i++) {
  console.log(
    "Hello " +
    friends[i] +
    " I would like to invite you to join me on dinner"
  );
}
console.log("---------------");
console.log("Found a Bigger Dinner Table SO now Inviting More Friends");
console.log("---------------");

friends.unshift("Adil");
friends.splice(friends.length / 2, 0, "Rizwan");
friends.push("Musa");
console.log("---------------");
console.log("Updated List");
console.log("---------------");

for (let i = 0; i < friends.length; i++) {
  console.log(
    "Hello " +
    friends[i] +
    " I would like to invite you to join me on dinner"
  );
}
console.log("Sorry but I can invite only two people for dinner.");

do {
  let name = friends.pop();
  console.log("I am sorry I can't invite you to dinner. " + name);
} while (friends.length > 2);

console.log("-----------------------");

for (let i = 0; i < friends.length; i++) {
  console.log("You are still invited. " + friends[i]);
}

do {
  friends.pop();
} while (friends.length > 0);
console.log(friends);
