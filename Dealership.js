class Dealership {
    constructor(name, maxCars) {
      this.name = name;
      this.maxCars = maxCars;
      this.carsInStock = [];
    }
  
    countCarsInStock() {
      return this.carsInStock.length;
    }
  
    addCarToStock(car) {
      if (this.carsInStock.length < this.maxCars) {
        this.carsInStock.push(car);
        return true;
      } else {
        return false;
      }
    }
  
    getManufacturers() {
      return this.carsInStock.map(car => car.manufacturer);
    }
  
    getCarsByManufacturer(manufacturer) {
      return this.carsInStock.filter(car => car.manufacturer === manufacturer);
    }
  
    calculateTotalValue() {
      return this.carsInStock.reduce((total, car) => total + car.price, 0);
    }
    
  sellCar(manufacturer, customer) {
    const carIndex = this.carsInStock.findIndex(car => car.manufacturer === manufacturer);

    if (carIndex !== -1 && customer.canAfford(this.carsInStock[carIndex].price)) {
      const soldCar = this.carsInStock.splice(carIndex, 1)[0];
      customer.buyCar(soldCar);
      return soldCar;
    } else {
      return null;
    }
  }
  }
  
  module.exports = Dealership;



