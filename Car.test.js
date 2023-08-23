const  Car  = require("./Car");
const car = new Car('Toyota', 20000, 'Hybrid');

describe('testing car properties', () => {

test('Can access car properties', () => {
   
    expect(car.Manufacturer = "BMW").toBe("BMW");
    expect(car.price).toBe(20000);
    expect(car.engineType).toBe('Hybrid');
})

})