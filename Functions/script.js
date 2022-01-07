'use strict'
//Setting default values to parameters.

/*
const bookings = [];

const createBooking = function(
    flightNum,
    numPassengers =1,
    price=numPassengers* 100)
{
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('LH123');
createBooking('LH123',2);
createBooking('LH123',6);

// How Passing Arguments Work:Values vs Reference

const flight = 'LH234';
const jonas = {
    name:'Jonas Schmedtmann',
    passport: 24645644746,
}
const checkIn = function(flightNum,passengers){
    flightNum = 'LH878';
    passengers.name = 'Mr.'+passengers.name;
    
    if(passengers.passport === 24645644746)
    {
        alert('Check-In')
    }
    else
    alert('Wrong-passport!');
}

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*1000000000);
}
newPassport(jonas);
checkIn(flight,jonas);
*/

//-----------------First Class Functions----------------//
//1.Javascript treats functions as first class citizens.
//2.This means that functions are simply values.
//3.Functions are just "type" of object.

//-----------------Higher Order Functions---------------//
//1.A function that recieves another function as an argument,that returns a new function or both
//2.This is possible because of first class functions.
/*
const oneWord = function(str)
{
    return str.replace(/ /g,'').tolowerCase();
}
const upperFirstWord = function(str)
{
    const[first,...others] = str.split(' ');
    return[first.toUpperCase(),...others].join(' ');
}
//Higher Order function
const transformer = function(str,fn)
{
    console.log(`Transformed string: ${fn(str)}`)
}
transformer('JavaScript is the best!',upperFirstWord);
*/

//---------------------Function returning functions.----------------------//
/*
const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}
const greetHey = greet('Hey');
greetHey('Jonas');
greetHey('Piyush');
greet('Hello')('Piyush');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Yo Yo')('Jonas');
*/

const lufthansa = {
    airline: 'Lufthansa',
    iatacode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode} ${flightNum}`);
        this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
    }
};
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'EuroWings',
    iatacode: 'EW',
    bookings: [],
};

//------------------CALL AND APPLY METHODS------------------------------//

/*
//call() provides a new value of this to the function/method. 
//With call(), you can write a method once and then inherit it in another object,
//without having to rewrite the method for the new object.
const book = lufthansa.book;
book.call(eurowings, 23, 'Sarah Williams');
book.call(lufthansa, 329, 'May cooper');

const airindia = {
    airline: 'Air India',
    iatacode: 'AI',
    bookings: [],
}
book.call(airindia, 868, 'Imran Khan');

//----------------Apply Method()
//The apply() method calls a function with a given this value,
//and arguments provided as an array (or an array-like object).

const flightData = [583, 'George Cooper'];
book.apply(airindia, flightData);

//-------------BIND METHOD----------------//
// The bind() method creates a new function that, when called, has its this keyword set to the provided value, 
// with a given sequence of arguments preceding any provided when the new function is called.

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookAI = book.bind(airindia);

bookAI(999, 'Narendra Mudi');
bookLH(754, 'Lisa Ann');

//We can also preset a parameter using the bind method.
const bookEW23 = book.bind(eurowings, 23);//We have set the flightNum parameter to 23 permanently.
bookEW23('Shroud');

//With EventListeners
lufthansa.planes = 300;
lufthansa.buyplanes = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
//In an event handler function the this keyword always points to the element on which the handler is attached to.
//So we use the bind() method so that the this keyword points to the object passed.

document.querySelector('.buy').addEventListener('click',lufthansa.buyplanes.bind(lufthansa));

//Partial Application

const addTax = (rate,value) => value+value*rate;
console.log(addTax(0.1,200));

const addGST = addTax.bind(null,0.18);
console.log(addGST(400));

const tax = function(rate){
    return function(value){
        value = value+value*rate;
        console.log(value);
    }
}
tax(.25)(100);
*/

//--------------Immediately invoked Function Expressions.------------------//
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 
// (function () {
//     statements
//   })();
/*
(function(){
    console.log('This will never run again');
    const isPrivate = 23;
})();

(() => console.log('This will Also never run again'))();
*/

//--------------------------CLOSURES-----------------------------//

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function’s scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.

const secureBooking = function(){
    let passengerCount = 0;
    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();
booker();
booker();

/*

UnderStanding Closures.

1.A closure is closed over a variable enviornment of the execution context in which a function was created,
  even after that the execution context is gone.
  
2.A closure gives a function access to all the variables of its parent function,even after that parent function has returned.
  The function keeps a reference to its outer scope,which preserves the scope chain throughOut time.

3.A closure makes sure that a function doesnot loose connection to variables that existed at function's birth place.

4.A closure is like a backpack that a function carries around wherever it goes.
  This backpack has all the variables that were present in the enviornment where the function was created.

*/

// More Closure Examples

let f;

let g = function(){

    const a = 34;
  f = function (){
      console.log(a*5);
  }
}
g();
f();

const boardPassengers = function(n,wait){
    const perGroup = n/3;

    setTimeout(function(){
        console.log(`We are boarding all ${n} passengers`);
        console.log(`There are 3 groups,each with ${perGroup} passengers`)
    },wait*1000);

    console.log(`Will start boarding in ${wait} seconds`);
}
boardPassengers(210,3);