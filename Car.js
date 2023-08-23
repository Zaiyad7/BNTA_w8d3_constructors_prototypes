const Car = function(manufacturer, price, engineType) {
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;
 
}

Car.prototype.setManufacturer = function(newManufacturer) {
    this.manufacturer = newManufacturer;
}
Car.prototype.setPrice = function(price) {
    this.price = price;
}
Car.prototype.setEngineType = function(engineType) {
    this.engineType = engineType;
}
Car.prototype.getManufacturer = function() { return this.manufacturer }
Car.prototype.getPrice = function() { return this.price }
Car.prototype.getEngineType = function() { return this.engineType }


module.exports = Car;


