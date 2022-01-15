
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,
   
    movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-05-27T17:01:17.194Z',
      '2020-07-11T23:36:17.929Z',
      '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
  };
  
  const accounts = [account1, account2];

//////////////////////////////////////////////////////////////////////////////////////////

  //   All Numbers are floating point numbers in JavaScript
console.log(21 === 21.00);

console.log(0.1+0.2);
console.log(0.1+0.2 === 0.3);

//Conversion
console.log(Number('23'));
console.log(+'23')

//Parsing
console.log(Number.parseInt('30@#$',10));

console.log(Number.parseFloat('  2.5 rem  '));

console.log(Number.isNaN(+'20x'));

console.log(Number.isNaN('25/0'));

//Checking if a value is a number.
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(23/0));
console.log(+'20X');

//Mathematical Operations And Rounding Off

console.log(Math.sqrt(79));
console.log( 256 ** (1/2) );
console.log(64 ** (1/3));

console.log(Math.max(5,1,29,4,44,646,15,48,13,13,44));
console.log(Math.max(5,1,29,4,44,'64',15,48,13,13,44));

console.log(Math.min(5,1,29,4,44,'64',15,48,13,13,44));

console.log(Math.PI * Number.parseFloat('10px')**2);

console.log(Math.trunc(Math.random()* 8)+1); 

// Random Integers Between A range.
const randomInt = (min,max) => Math.floor(Math.random() * (max-min)+1) + min;
console.log(randomInt(10,20));

//rounding Integers 
console.log(Math.trunc(54.4964));

console.log(Math.round(45.54));

console.log(Math.ceil(42.36));
console.log(Math.ceil(42.92));

console.log(Math.floor(24.3));
console.log(Math.floor(24.8));

//Rounding Decimals

console.log((2.754).toFixed(0)); //Returns a String.
console.log(+(45.356).toFixed(2)); 

// REMAINDER OPERATOR
console.log(5 % 2);

console.log(2 ** 53 -1);
console.log(Number.MAX_SAFE_INTEGER);

//Create a date

const now = new Date();
console.log(now);

console.log(new Date('Wed Jan 12 2022 16:10:10'));
console.log(new Date('December 24 2015'));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));

console.log(new Date(3*24*60*60*1000));

//Working With Dates
const future  = new Date(2037,10,19,15,23);
console.log(future);

// Date Methods
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

//Time Stamp
console.log(Date.now());

future.setFullYear(2040);
console.log(future);

//Calculations With Dates

console.log(+future);

const calcDaysPassed = (date1,date2) => Math.abs(date1 - date2) /(1000*60*60*24);

const days1 = calcDaysPassed(new Date(2037,3,14),new Date(2039,6,2));
console.log(days1);

//NUmbers

const num = 3884761.14749;

const options = {
  style : 'currency',
  unit : 'celsius',
  currency : 'EUR',
  // useGrouping : false, 
};

console.log('US : ',new Intl.NumberFormat('en-US',options).format(num));
console.log('Germany : ',new Intl.NumberFormat('de-DE',options).format(num));
console.log('Syria : ',new Intl.NumberFormat('ar-SY',options).format(num));


//TIMERS

//SetTimeOut Method().
//The setTimeout() method calls a function after a number of milliseconds.

const ingredients = ['olives','chilli'];

const pizzaTimer = setTimeout(
  (ing1,ing2) => console.log(`Here is your pizza with  ${ing1} and ${ing2} 🍕`),
                    3000,
                    ...ingredients);

console.log('Waiting...');

if(ingredients.includes('spinach')) 
{
  clearTimeout(pizzaTimer);
}


//SetInterval() Method
 
// The setInterval() method calls a function at specified intervals (in milliseconds).
// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed

setInterval(function(){

  const now = new Date();
  console.log(now);
},60000);



