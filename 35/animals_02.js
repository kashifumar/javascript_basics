
let animals = ["Cat", "Dog", "Rabbit"];
if (animals.length > 0) {
  for (let i = 0; i < animals.length; i++) {
    if (animals[i] == "Cat") {
      console.log(animals[i] + " is a lovely and cudly pet");
    }
    else if (animals[i] == "Dog") {
      console.log(animals[i] + " is a loyal and brave pet");
    }
    else if (animals[i] == "Rabbit") {
      console.log(animals[i] + " is a cute and adorable pet");
    }
    console.log("These are all nice pet animals");

  }
} else {
  console.log("List is empty");
}
