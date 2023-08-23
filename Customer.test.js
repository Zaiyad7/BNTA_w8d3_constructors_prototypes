const Customer = require('./Customer');
const Car = require('./Car');

test('Customer can buy a car', () => {
  const customer = new Customer('Desmond', 30000);
  const car = new Car('Toyota', 25000, 'Petrol');

  customer.buyCar(car);

  expect(customer.car).toBe(car);
  expect(customer.wallet).toBe(5000); 
});