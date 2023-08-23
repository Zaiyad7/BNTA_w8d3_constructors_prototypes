const Car = require('./Car');

test('Car properties can be accessed', () => {
  const car = new Car('Toyota', 25000, 'Petrol');

  expect(car.manufacturer).toBe('Toyota');
  expect(car.price).toBe(25000);
  expect(car.engineType).toBe('Petrol');
});
