//this refers to the newly created object - see below for example

function Car(model, make) {
  this.model = model;
  this.make = make;
}

let myCar = new Car("Safari", "Tata");
// console.log(myCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a ${this.type} tea`;
  };
}

let myTea = new Tea("Lemon");
// console.log(myTea.describe());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}

// let newDrink = Drink("This is an Example without new keyword");
let coffee = new Drink("Coffee");
console.log(coffee);


