'use strict';

const openingHours = {
  thu:{
    open:12,
    close:22,
  },
  fri:{
    open:11,
    close:23,
  },
  sat:{
    open:0,
    close:24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic-Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
 
  order(starterIndex,mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  orderDelivery: function({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
  console.log(`Order recieved! ${this.staterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
  will be delivered to ${address} at ${time}`
  );
  },
  //ES6 enhanced object literals.
  openingHours,

 orderPasta(ing1,ing2,ing3)
 {
   console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
 },

 orderPizza(mainIngredient,...otherIngredients)
 {
   console.log(mainIngredient);
   console.log(otherIngredients);
 }
};
//Destructing -- It is an ES6 feature which is basically a way of unpacking values
//               from an array or an object into separate variables.

//---------------------ARRAY DESTRUCTURING--------------------//
/*
const arr = [7,8,9];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

const newArr = [1,2,...arr,4,5];
console.log(newArr); //spread operator

const newMenu = [...restaurant.mainMenu,'Gnocci'];
console.log(newMenu);
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x,y,z);

let [main, ,secondary] = restaurant.categories;
console.log(main,secondary); 

//Switching Variables
[main,secondary] = [secondary,main];
console.log(main,secondary);

const[starter,mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);

//Nested Destructuring
const nested = [2,4,[5,6]]; 
// const [i, ,j] = nested;
const[i, ,[j,k]] = nested;
console.log(i,j,k);

//Default Values 
const[p=1,q=1,r=1] = [8,9];
console.log(p,q,r);
*/

      //-----------------OBJECT DESTRUCTURING---------------------//
      /*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic-Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours :{
    thu:{
      open:12,
      close:22,
    },
    fri:{
      open:11,
      close:23,
    },
    sat:{
      open:0,
      close:24,
    },
  },

  order: function(starterIndex,mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  orderDelivery: function({
    starterIndex = 1;
    mainIndex = 0;
    time = '20:00';
    address,
  }){
  console.log(`Order recieved! ${this.staterMenu[staterIndex]} and ${this.mainMenu[mainIndex]}
  will be delivered to ${address} at ${time}`
  );
  },

};

const{name,openingHours,categories} = restaurant;
console.log(name,openingHours,categories);

const{name:restaurantName,openingHours:hours,categories:tags} = restaurant;
console.log(restaurantName,hours,tags);
//Default Values.
const {menu = [],starterMenu:starters = []} = restaurant;
console.log(menu,starters);

//Mutating Variables.
let a = 111;
let b = 999;
const obj = {a:23,b:7,c:14};
({a,b} = obj);
console.log(a,b);

//Nested Objects 
const{fri:{open:o,close:c}} = openingHours;
console.log(o,c);
*/

//-----------------THE SPREAD OPERATOR(...)---------------------//
//Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
/*

//Spread Operator is bit similar to destructuring because it also helps us to get elements out of arrays.
//But the difference is that the spread operator takes all the elements from the array and it doesnot create new variables.
//We can only use spread operator in places where we would otherwise write values separated by commas.

//To Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

//Iterables -- arrays,strings,maps,sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ','S'];
console.log(letters);

//Real -World Example
const ingredients = [
prompt('Let\'s Make Pasta! Ingredient 1?'),
prompt('Let\'s Make Pasta! Ingredient 2?'),
prompt('Let\'s Make Pasta! Ingredient 3?')]; 

restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {foundedIn: 1994,...restaurant,founder:'Goldberg'};
console.log(newRestaurant);
*/

//--------------------THE REST OPERATOR--------------------------//
/*
//Spread because on right side of =
const arr = [1,2,...[3,4]];

//Rest because on left side of =
const [a,b,...others] = [1,2,3,4,5];
console.log(a,b,others);
const[pizza, ,risotto,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu,];
console.log(pizza,risotto,otherFood);

//Objects 
const{sat,...weekdays} = restaurant.openingHours;
console.log(sat,weekdays);

//Rest Parameters -- The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
//                   providing a way to represent variadic functions in JavaScript.
       
const add = function(...numbers)
{
  let sum =0;
  for(let i =0;i<numbers.length;i++)
  {
    sum+=numbers[i];
  }
  console.log(sum);
}
add(1,2,3,5,68,6,8);
const x = [5,9,7,3,45,8,99,11,33,44,21,464,1749,25464,214,212,356,88,4524];
add(...x);
restaurant.orderPizza('mushrooms','onion','olives','capsicum');


//-----------------AND(&&) and OR(||) Operators---------------///
// && returns falsy value and || operator returns the truthy value.They both short-circuit when they find their appropriate values.
//---------------Nullish Coalescing Operator(??)------------------//

//--------------------The For-of loop in Arrays
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
for(const item of menu)
{
  console.log(item);
}
//to get the index
for(const item of menu.entries())
{
  console.log(item);
}
//Destructuring using for of
for(const[i,el] of menu.entries())
{
  console.log(`${i+1} : ${el}`);
}


//Optional Chaining (?.)-- With optional chaining if a certain feature doesnot exist then undefined is returned immediately.

//Without Optional Chaining.
if(restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

//With Optional Chaining.
console.log(restaurant.openingHours?.mon?.open);

const days =['mon','tue','wed','thu','fri','sat','sun'];
for(const day of days)
{
 const openTime  = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${openTime}`);
}
//Optional Chaining on Methods.
console.log(restaurant.order?.(0,1) ?? 'Method doesnot Exist');

//Arrays 
const users = [{name :'Jonas', email:'hello@jonas.io'}];
console.log(users[0]?.name ?? 'User Array empty');

 //Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
let openStr =`We are open on ${properties.length} days`;
for(const day of Object.keys(openingHours))
{
  openStr+=` ${day}`;
}
console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);

// [key,value]
for(const [day,{open,close}] of entries)
{
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
 */













