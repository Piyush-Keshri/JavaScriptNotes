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


const Person = function(firstName,birthYear){
 
    //Instance Properties

    this.firstName = firstName;
    this.birthYear = birthYear;
    
    // NEVER create METHODS INSIDE A CONSTRUCTOR FUNCTIONS.
    // this.calcAge = function(){

    //     console.log(2037 - this.birthYear);
    // }
}

const jonas = new Person('Jonas',1991);
console.log(jonas);

//Steps
//1. New {}(empty Object) is created.
//2. function is called, this = {}
//3. {} linked to prototype.
//4. function automatically return {}

//Now we can create as many objects with the constructor function.

const lisa = new Person('lisa',2001);
const jack = new Person('jack',1993);
const bob = new Person('Bob',1998);
console.log(lisa,jack,bob);

//All these Objects are instances of Person.
console.log(jonas instanceof Person);

//------------------PROTOTYPES.

//The JavaScript prototype property allows you to add new properties to object constructors.

console.log(Person.prototype);

Person.prototype.calcAge = function(){
  
  console.log(2037 - this.birthYear);

}
jonas.calcAge();
lisa.calcAge();

console.log(jonas.__proto__);

Person.prototype.species = 'Homo-Sapiens';

console.log(jonas.species,lisa.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

const arr = [3,6,6,4,6,7,7,2,1,0,7,2];

console.log(arr.__proto__);

Array.prototype.unique = function(){

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
GOOD LUCK 😀
*/

const Car = function(make,speed){

  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function(){

  this.speed +=10;
  console.log(this.speed);
}

Car.prototype.brake = function(){

  this.speed -=5;
  console.log(this.speed);
}

const bmw = new Car('BMW',120);
const mercedes = new Car('Mercedes',95);

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

  constructor(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge(){
    console.log(2037 - this.birthYear);
  }

}

const jessica = new PersonCl('Jessica',1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);


// ------------------SETTERS AND GETTERS----------------------- //
const account = {

  owner: 'Jonas',
  movements: [200,530,120,300],

  get latest(){

    return this.movements.slice(-1).pop();
  },

  set latest(mov){
    this.movements.push(mov);
  }
};

console.log(account.latest);
account.latest = 50;

console.log(account.latest);


