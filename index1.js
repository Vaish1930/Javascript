class Vehicle {
  constructor(type) {
    this.type = type;
  }
  start() {
    console.log("starting");
  }
  stop() {
    console.log("stopping");
  }
}

const vehicle = new Vehicle("Petrol");

class Car extends Vehicle {
  constructor(type, model) {
    super(type);
    this.model = model;
  }
  start() {
    super.start();
    console.log("Car is starting");
  }
}

new Car("Petrol", "audi").start();
