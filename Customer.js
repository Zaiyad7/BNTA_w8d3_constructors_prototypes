class Customer {
    constructor(name, wallet) {
      this.name = name;
      this.wallet = wallet;
      this.car = null;
    }
  
    canAfford(price) {
      return this.wallet >= price;
    }
  
    buyCar(car) {
      if (this.canAfford(car.price)) {
        this.car = car;
        this.wallet -= car.price;
      }
    }
  }
  
  module.exports = Customer;