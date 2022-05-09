class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  walk() {
    console.log(`${this.name} is walking with me`);
  }

  static useless() {
    console.log("I'm Useless");
  }
}

const person = new Person("Harshit", 9);
person.walk();

Person.useless();
