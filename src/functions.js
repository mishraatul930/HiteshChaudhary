// When the function goes inside the class it is known as Methods
// methods does not need a function keyword before the method name

function makeTea(typeofTea) {
  return `Making ${typeofTea}`;
}

let greet = makeTea("greentea");
// console.log(greet);

function orderTea(teaType) {
  function confirmOrder() {
    return `Order Confirmed for chai`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("Chai");
// console.log(orderConfirmation);

const calculateTotal = (price_per_unit, quantity) => {
  return price_per_unit * quantity;
};

let totalCost = calculateTotal(100, 10);
console.log(totalCost);
