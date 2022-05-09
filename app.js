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

class Car extends Vehicle {}

// new Car("Petrol").start();
