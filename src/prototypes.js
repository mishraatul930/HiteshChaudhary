//Prototype means extra functionality and extra properties of a method or any keyword or
//anything being used in js

//Design Prototypes

let genericCar = {
  tyres: 4,
  engine: 1,
};

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(`Tesla`, Object.getPrototypeOf(tesla));
