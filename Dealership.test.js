const Dealership = require('./Dealership');
const Car = require('./Car');

test('Dealership methods work correctly', () => {
  const dealership = new Dealership('Awesome Autos', 5);

  const car1 = new Car('Toyota', 25000, 'Gasoline');
  const car2 = new Car('Honda', 28000, 'Electric');

  dealership.addCarToStock(car1);
  dealership.addCarToStock(car2);

  expect(dealership.countCarsInStock()).toBe(2);
  expect(dealership.getManufacturers()).toEqual(['Toyota', 'Honda']);
  expect(dealership.getCarsByManufacturer('Toyota')).toEqual([car1]);
  expect(dealership.calculateTotalValue()).toBe(53000);
});
    