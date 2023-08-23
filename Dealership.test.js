const Dealership = require("./Dealership");
const  Car  = require("./Car");

const car1 = new Car('Toyota', 20000, 'Gas');
const car2 = new Car('Honda', 28000, 'Hybrid');


describe('testing dealership methods', () => {

    test('Dealership can count cars in stock', () => {
        const dealership = new Dealership('Garage', 10);
        
      
        dealership.addCarToStock(car1);
        dealership.addCarToStock(car2);
      
        expect(dealership.countCarStock()).toBe(2);
      });
    
    test('Dealership can return car manufacturers', () => {
        const dealership = new Dealership('Garage', 10);
       
      
        dealership.addCarToStock(car1);
        dealership.addCarToStock(car2);
      
        expect(dealership.getCarManufacturers()).toEqual(['Toyota', 'Honda']);
      });
    
    // test('Dealership can find cars by manufacturer', () => {
    //     const dealership = new Dealership('Garage', 10);
     
      
    //     dealership.addCarToStock(car1);
    //     dealership.addCarToStock(car2);
    //     // dealership.addCarToStock(car3);
      
    //     const toyotaCars = dealership.getCarsByManufacturer('Toyota');
    //     expect(toyotaCars).toEqual([car1, car2]);
    //   }); 





})