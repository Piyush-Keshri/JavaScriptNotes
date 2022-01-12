
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

