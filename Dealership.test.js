const Dealership = require('./Dealership');
const Car = require('./Car');
const Customer = require('./Customer');

test('Dealership methods work', () => {
  const dealership = new Dealership('AutoTrader', 5);

  const car1 = new Car('Toyota', 25000, 'Petrol');
  const car2 = new Car('Honda', 28000, 'Electric');

  dealership.addCarToStock(car1);
  dealership.addCarToStock(car2);

  expect(dealership.countCarsInStock()).toBe(2);
  expect(dealership.getManufacturers()).toEqual(['Toyota', 'Honda']);
  expect(dealership.getCarsByManufacturer('Toyota')).toEqual([car1]);
  expect(dealership.calculateTotalValue()).toBe(53000);
});

test('Dealership can sell car to customer', () => {
    const dealership = new Dealership('AutoTrader', 5);
    const customer = new Customer('Ezio', 40000);
  
    const car1 = new Car('Toyota', 25000, 'Petrol');
    const car2 = new Car('Honda', 28000, 'Electric');
  
    dealership.addCarToStock(car1);
    dealership.addCarToStock(car2);
  
    const soldCar = dealership.sellCar('Toyota', customer);
  
    expect(soldCar).toEqual(car1);
    expect(dealership.countCarsInStock()).toBe(1);
    expect(customer.car).toBe(car1);
    expect(customer.wallet).toBe(15000); 
  });

test('Dealership cannot sell if customer cannot afford car', () => {
    const dealership = new Dealership('AutoTrader', 5);
    const customer = new Customer('Connor', 20000);
  
    const car = new Car('Toyota', 25000, 'Petrol');
  
    dealership.addCarToStock(car);
  
    const soldCar = dealership.sellCar('Toyota', customer);
  
    expect(soldCar).toBeNull();
    expect(dealership.countCarsInStock()).toBe(1); 
    expect(customer.car).toBeNull(); 
  });

test('Dealership can search cars by manufacturer, price, or engine type', () => {
    const dealership = new Dealership('AutoTrader', 5);
  
    const car1 = new Car('Toyota', 25000, 'Petrol');
    const car2 = new Car('Honda', 28000, 'Petrol');
    const car3 = new Car('Suzuki', 20000, 'Electric');
  
    dealership.addCarToStock(car1);
    dealership.addCarToStock(car2);
    dealership.addCarToStock(car3);
  
    const searchResultsByEngineType = dealership.searchCars('Petrol');
    const searchResultsByManufacturer = dealership.searchCars('Toyota');
    const searchResultsByPrice = dealership.searchCars('20000');
  
    expect(searchResultsByEngineType).toEqual([car1, car2]);
    expect(searchResultsByManufacturer).toEqual([car1]);
    expect(searchResultsByPrice).toEqual([car3]);

  });

test('Dealership cannot add more cars than its maximum stock', () => {
    const dealership = new Dealership('AutoTrader', 2);
  
    const car1 = new Car('Toyota', 25000, 'Petrol');
    const car2 = new Car('Honda', 28000, 'Electric');
    const car3 = new Car('Ford', 20000, 'Petrol');
  
    const added1 = dealership.addCarToStock(car1);
    const added2 = dealership.addCarToStock(car2);
    const added3 = dealership.addCarToStock(car3);
  
    expect(added1).toBe(true);
    expect(added2).toBe(true);
    expect(added3).toBe(false); 
  });
  
test('Dealership cannot sell car not in stock', () => {
    const dealership = new Dealership('AutoTrader', 5);
    const customer = new Customer('Altair', 30000);
  
    const car = new Car('Toyota', 25000, 'Petrol');
    const soldCar = dealership.sellCar('Toyota', customer);
  
    expect(soldCar).toBeNull();
    expect(customer.car).toBeNull();
  });
    