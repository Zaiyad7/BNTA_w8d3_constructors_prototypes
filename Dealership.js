const Car = require("./Car")

const Dealership = function(name, maxCarStorage) {

    this.name = name;
    this.maxCarStorage = maxCarStorage;
    this.carStock = [];
    
}



Dealership.prototype.countCarStock = function() {
    return this.carStock.length;
}
Dealership.prototype.addCarToStock = function(car) {
    if (this.carStock.length < this.maxCarStorage) {
        this.carStock.push(car);
        return true;
    }
    return false;
}

Dealership.prototype.getCarManufacturers = function(car) {
    return this.carStock.map(car => this.manufacturer)
}

Dealership.prototype.getCarsByManufacturer = function(car) {
    return this.carStock.filter(car => car.manufacturer === manufacturer);
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