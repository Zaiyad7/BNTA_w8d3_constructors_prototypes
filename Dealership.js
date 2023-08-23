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
  }
  
  module.exports = Dealership;



// Create  Car class. The car should have properties representing manufacturer, price and engine type.
// Set up Jest and write tests to make sure you can access each of those properties in a Car object.
// Create a Dealership class. It should have properties representing its name, maximum number of cars it can have and the cars currently in stock.
// Add methods to Dealership to:
// Count the number of cars in stock
// Add a car to stock
// Return an array containing each car's manufacturer
// Find all the cars from a given manufacturer
// Find the total value of all the cars in stock
// Write tests for Dealership's methods.