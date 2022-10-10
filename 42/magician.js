
function make_great(magicians) {
  if (magicians.length > 0) {
    for (let i in magicians) {
      magicians[i] = "Great " + magicians[i];
    }
  } else {
    console.log("List Is Empty");
  }
}
function show_magicians(magicians) {
  if (magicians.length > 0) {
    for (let i in magicians) {
      console.log(magicians[i]);
    }
  } else {
    console.log("List Is Empty");
  }
}

let magicians = [
  "David Blaine",
  "Penn and Teller",
  "Jerry Sadowitz",
  "Dynamo",
  "Apollo Robbins",
  "Derren Brown",
  "The Great Lafayette",
  "Criss Angel",
  "Harry Houdini",
  "Ricky Jay",
];
make_great(magicians);
show_magicians(magicians);
