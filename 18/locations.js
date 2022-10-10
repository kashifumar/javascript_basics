
let locations = ["Makkah", "New Zealand", "Madina", "Dubai", "Canada"];
console.log("Original Order");
console.log("---------------");
for (let i = 0; i < locations.length; i++) {
  console.log(locations[i]);
}
let tempLocations = [...locations];
tempLocations.sort();
console.log("---------------");
console.log("After Sorting");
console.log("---------------");
for (let i = 0; i < tempLocations.length; i++) {
  console.log(tempLocations[i]);
}

console.log("---------------");
console.log("After Sorting Original List");
console.log("---------------");
for (let i = 0; i < locations.length; i++) {
  console.log(locations[i]);
}

tempLocations.reverse();
console.log("---------------");
console.log("After Reverse Sorting");
console.log("---------------");
for (let i = 0; i < tempLocations.length; i++) {
  console.log(tempLocations[i]);
}

console.log("---------------");
console.log("After Reverse Sorting Original List");
console.log("---------------");
for (let i = 0; i < locations.length; i++) {
  console.log(locations[i]);
}

tempLocations.reverse();
console.log("---------------");
console.log("After Reverse");
console.log("---------------");
for (let i = 0; i < tempLocations.length; i++) {
  console.log(tempLocations[i]);
}

tempLocations.reverse();
console.log("---------------");
console.log("After Again Reverse");
console.log("---------------");
for (let i = 0; i < tempLocations.length; i++) {
  console.log(tempLocations[i]);
}

tempLocations.sort();
console.log("---------------");
console.log("After Sort");
console.log("---------------");

for (let i = 0; i < tempLocations.length; i++) {
  console.log(tempLocations[i]);
}

tempLocations.reverse();
console.log("---------------");
console.log("After Sort");
console.log("---------------");
for (let i = 0; i < tempLocations.length; i++) {
  console.log(tempLocations[i]);
}
