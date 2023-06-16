function CarDecorator(constructor:Function){
    console.log(constructor);
}
@CarDecorator
class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
}
let c1 = new Car("Honda");
console.log(c1);

