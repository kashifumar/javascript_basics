
function make_car(maker, model, ...args) {
  const car = new Object();
  car.manufacturer = maker;
  car.model = model;
  for (let i = 2; i < arguments.length; i++) {
    Object.assign(car, arguments[i]);
  }
  return car;
}
const car1 = make_car("Toyota", "Corolla");
const car2 = make_car("Honda", "Civic");
const car3 = make_car(
  "Hyundai",
  "ELANTRA",
  { color: "Black" },
  { engine_size: "1600CC" }
);
const car4 = make_car(
  "MG",
  "5",
  { color: "Yellow" },
  { transmission: "Automatic" }
);

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
