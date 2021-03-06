'use strict'

/*

//-------------------------DEFINITION----------------------------//

# Object oriented programming is a programming paradigm(style of programming) based on the concept of objects.

# Objects may contain data(properties) and code(methods).By using objects we pack data and corresponding behaviour into one block.

# In OOPs,objects are self contained pieces/blocks of code.Objects are building blocks of applications and interacr with one another.

# Interactions happens through a public interface(API) : methods that the code outside of the object can access and use to communicate with the object.

# OOPs was developed with the goal of organising code to make it more flexible and easier to maintain.

# Classes :- Classes are like a blueprint from which we can create objects.
             Objects(instances) are instantiated from a class,which functions like a bluePrint for objects.
             Behavior(methods) is copid from class to all instances.

            
//--------------------FUNDAMENTAL OOPs PRINCIPLES-----------------------------//

#1. ABSTRACTION  
#2. ENCAPSULATION
#3. INHERITANCE
#4. POLYMORPHISM

//--------------ABSTRACTION

# Ignoring or hiding details that do not matter allowing us to get an overview perspective of the thing we are implementing,instead of messing with the details
  that donot really matter to our implementation.

//--------------ENCAPSULATION 

# Keeping properties and methods private inside the class,so they are not accessible from outside the class.Some methods can be exposed as a public interfac(API).

//--------------INHERITANCE

# Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes.
  This allows us to rescue common logic and to model real world relationships.

# Prototypal Inheritance :- The prototype contains behaviour(methods) that are accessible to all objects linked to that prototype. 

//--------------POLYMORPHISM

# A child class can overwrite a method that it inherited from a parent class.

*/

//----------------Constructor Function.

//Difference between a regular function and a constructor function is that a constructor function uses 'new' keyword.
//Variables of constructor function starts with a capital letter.


const Person = function (firstName, birthYear) {

  //Instance Properties

  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER create METHODS INSIDE A CONSTRUCTOR FUNCTIONS.
  // this.calcAge = function(){

  //     console.log(2037 - this.birthYear);
  // }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

//Steps
//1. New {}(empty Object) is created.
//2. function is called, this = {}
//3. {} linked to prototype.
//4. function automatically return {}

//Now we can create as many objects with the constructor function.

const lisa = new Person('lisa', 2001);
const jack = new Person('jack', 1993);
const bob = new Person('Bob', 1998);
console.log(lisa, jack, bob);

//All these Objects are instances of Person.
console.log(jonas instanceof Person);

//------------------PROTOTYPES.

// The JavaScript prototype property allows you to add new properties to object constructors.

console.log(Person.prototype);

Person.prototype.calcAge = function () {

  console.log(2037 - this.birthYear);

}
jonas.calcAge();
lisa.calcAge();

console.log(jonas.__proto__);

Person.prototype.species = 'Homo-Sapiens';

console.log(jonas.species, lisa.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

const arr = [3, 6, 6, 4, 6, 7, 7, 2, 1, 0, 7, 2];

console.log(arr.__proto__);

Array.prototype.unique = function () {

  return [...new Set(this)];

}
console.log(arr.unique());

//-----------------------Coding Challenge 1 -------------------------------------//
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK ????
*/

const Car = function (make, speed) {

  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {

  this.speed += 10;
  console.log(this.speed);
}

Car.prototype.brake = function () {

  this.speed -= 5;
  console.log(this.speed);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
mercedes.brake();

//--------------------------------CLASSES------------------------------------//

// Classes are not hoisted.
// Classes are also first class citizens.(We can pass them into functions and also return them from functions.)
// Classes are executed into strict mode.


//Class expression

// const PersonCl = class{} ;

//Class declaration

class PersonCl {

  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Instance Methods

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {

    if (name.includes(' '))
      this._fullName = name;

    else
      alert(`${name} is not a full name!`);

  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {

    console.log('Hey there ????');
  }

}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);


// ------------------SETTERS AND GETTERS----------------------- //
const account = {

  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {

    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  }
};

console.log(account.latest);
account.latest = 50;

console.log(account.latest);


//-------------------------------STATIC METHODS---------------------------------//

//1.The static keyword defines a static method or property for a class, or a class static initialization block.

//2.Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.

//3.Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration,
// or any other data you don't need to be replicated across instances.

const PersonSt = function (firstName, birthYear) {

  //Instance Properties

  this.firstName = firstName;
  this.birthYear = birthYear;
}

const john = new PersonSt('John', 1981);
console.log(john);

// static method
PersonSt.hey = function () {
  console.log('Hey There ????')
};

PersonSt.hey();
// We cannot call the hey method on the instance of PersonSt class.
// john.hey()

//-----------------------Object.create()---------------------------------//

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

// We can set the prototypes of Objects to any object that we want.

const PersonProto = {

  calcAge() {
    console.log(2037 - this.birthYear);
  }

}
const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 1985;

steven.calcAge();

//----------------------------CODING CHALLENGE 2---------------------------------//

/*
1. Re-create challenge 1 ,but this time using ES6 classes;
2. Add a getter called 'speedUs' which return the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUs' which sets the current speed in mi/h ;
4. Creare a new car and experiment with the getter and setter .

DATA CAR 1 : 'Ford' going at 120 km/h .

*/

class Car1 {

  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate = function () {

    this.speed += 10;
    console.log(this.speed);
  }

  brake = function () {

    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUs() {

    console.log(this.speed / 1.6);
  }

  set speedUs(val) {

    this.speed = val * 1.6;
  }

}

const newCar = new Car1('BMW', 120);

newCar.accelerate();
newCar.brake();
newCar.speedUs;
newCar.speedUs = 45;
newCar.accelerate();
newCar.accelerate();

console.log(newCar.speed);
console.log(newCar.make);
newCar.speedUs;

//-------------INHERITANCE BETWEEN CLASSES : CONSTRUCTOR FUNCTIONS----------------------//

const PersonI = function (firstName, birthYear) {

  this.firstName = firstName;
  this.birthYear = birthYear;

};

PersonI.prototype.calcAge = function () {

  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {

  PersonI.call(this, firstName, birthYear);   // Student constructor function inherits the PersonI constructor function.
  this.course = course;

};

Student.prototype = Object.create(Person.prototype); // Linking ProtoTypes

Student.prototype.introduce = function () {

  console.log(`My Name is ${this.firstName} and I study ${this.course}`);

}

const mike = new Student('Mike', 2020, 'CSE');

mike.introduce();
mike.calcAge(); //calcAge is a method of PersonI constructor function and mike is an object of Student constructor function.


//-----------------------------Coding Challenge #3----------------------------------------//

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. 
  Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%).
   Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism ????
DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK ????
*/

const ElectricCar = function (make, speed, charge) {

  Car.call(this, make, speed);
  this.charge = charge;

}
ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeTo) {

  this.charge = chargeTo;
  console.log(this.charge);
}
ElectricCar.prototype.accelerate = function () {

  this.speed += 20;
  this.charge -= 1;
  console.log(`${this.make} is going at ${this.speed} Km/Hr,with a charge of ${this.charge}%`);

}

const carI = new ElectricCar('Tesla', 120, 50);

carI.chargeBattery(70);
carI.accelerate();
carI.accelerate();
carI.brake();

//-----------------INHERITANCE BETWEEN CLASSES------------------------//

class StudentCl extends PersonCl {

  constructor(fullName, birthYear, course) {
    //Always needs to happen first!
    super(fullName, birthYear);

    this.course = course; //not mandatory

  }

  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }

}

const martha = new StudentCl(
  'Martha Jones',
  2012,
  'Computer Science'
);

martha.introduce();
martha.calcAge();

//  ------------------------More About Classes-------------------------------//

class Account {
  //Pubic Fields
  locale = navigator.language;
  
  //Private Fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {

    this.owner = owner;
    this.currency = currency;
  
    //Protected Property :- The underscore signifies that these properties are protected and should not be used outside class,but they are accessible.
    this.#pin = pin;
    //this._movements = [];
    //this.locale = navigator.language;

    console.log(`Thanks for Opening An Account- ${owner} `)
  }

  //Public Interface 

  getMovements(){
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }
  withdrawal(val) {
    this.deposit(-val);
  }
  
  requestLoan(val) {

    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }

  }

  //Private Methods
  #approveLoan(val) {
    return true;
  }

}

const acc1 = new Account('Jonas', 'Euro', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdrawal(150);
acc1.requestLoan(1000);
console.log(acc1._pin);        //Should Not be accessed directly by anyone.


//---------------ENCAPSULATION: PROTECTED PROPERTIES AND METHODS----------------------//

//-----------------Public Fields
// Public Fields are present on all the instances that we are creating through the class.
// They can be accessed by anyone outside the class.
// They are not on the prototype.
// They are also referencable via the 'this' keyword.

//---------------Private Fields(begins with #)
//Private Feilds are present on all the instances that we are creating through the class.
//Private feilds cannot be accessed by anyone outside the class.
//They are not on the prototype.
// They are also referencable via the 'this' keyword.

//----------------Public methods
//Methods inside the class which can also be used outside the class.

//Private methods(begins with #)
//Methods inside the class which cannot be accessed outside the class.