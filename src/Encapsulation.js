// Encapsulation restricts direct access to objects data
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
console.log(account.getBalance());

//static method - Cannot create object of the class

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(2, 4));

//getters and setters
