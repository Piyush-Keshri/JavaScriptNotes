'use strict'

//------------------------------ASYNCHRONOUS JAVASCRIPT------------------------------//

/*
--Synchronous JavaScript -- Code is executed line by line and Each line of code waits for the previous line to finish.
                            Synchronous code is blocking code.

--Asynchronous JavaScript -- Asynchronous code is executed after a task that runs in "background" finishes.
                             Asynchronous code is non-blocking.
                             Execution doesnot wait for an asynchronous task to finish its work.
                             Callback functions alone do NOT make code asynchronous !.

--AJAX(Asynchronous JavaScript And XML) -- AJAX allows us to communicate with remote web servers in an asynchronous way.
                                           With AJAX calls we can request data from web servers dynamically.

--API(Application Programming Interface) -- Piece of software that can be used by another piece of software,in order to allow applications to talk to each other. 
                                            Online API are applications running on a server that recieves requests for data, and sends data back as response.


*/

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

/////////////////////////////////////////////////////////////////////////////
/*
const getCountryData = function(country){
const request = new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
request.send();
console.log(request.responseText);
request.addEventListener('load',function(){
  const [data] = JSON.parse(this.responseText);
  console.log(data);
console.log(data.languages[0]);
  const html = 
  `<article class="country">
    <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(2)} </p>
            <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
        </div>
</article>`;

countriesContainer.insertAdjacentHTML('beforeend',html);
countriesContainer.style.opacity = 1;

});
}
getCountryData('france');
*/

const renderError = function(msg){
  countriesContainer.insertAdjacentText('beforeend',msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {

  console.log(data);
  const html =
    `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(2)} Mn </p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>🪙</span>${data.currencies[0].name}</p>

        </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

/*
const getCountryAndNeighbour = function (country) {
  //AJAX call country1.
  const request1 = new XMLHttpRequest();
  request1.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request1.send();

  request1.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render country 1
    renderCountry(data);

    //Get neighbour country 2
    const [neighbour] = data.borders;

    if (!neighbour)
      return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {

      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    })
  });
};

getCountryAndNeighbour('mexico');

//Callback Hell -- It should not be in our code as it makes the code nonreadable and more buggy.  

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
        setTimeout(() => {
          console.log('5 second passed');
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)
*/

// --------------------------------PROMISE--------------------------------------//
/*

Promise:- 
: An object that is used as a placeholder for future result of an asynchronous operation.
: A container for asynchronously delivered value.
: A container for future value.

-- We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results.

-- Instead of nesting Callbacks,we can chain promises for a sequence of asynchronous operations escaping callback hell.

const getCountryData = function(country){
  fetch(`https://restcountries.com/v2/name/${country}`).then(function(response){

      console.log(response);
    return response.json();
    }
  ).then(function(data){
    console.log(data);
    renderCountry(data[0]);
  })
}
*/
/* 
const getCountryData = function(country){

  //Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
  .then(response => response.json())
  .then(data => {
    renderCountry(data[0]);
    const neighbour = data[0].borders[0];
    
    if(neighbour === null) 
    return;
    
    //Country 2
    return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
  })
  .then(response => response.json())
  .then(data => renderCountry(data,'neighbour'))
  .catch(err => renderError(`Something went wrong ❌ ${err.message}`))
  .finally(() => countriesContainer.style.opacity = 1);
};

btn.addEventListener('click',function(){
  getCountryData('germany');
});
*/

/*
// Event loop in practice

console.log('Test Start');
setTimeout(() => console.log('0 sec timer'),0);
Promise.resolve('Resolved Promise 1').then(res => console.log(res));
console.log('Test End');

Promise.resolve('Resolved Promise 2').then(res => {
  for(let i=0;i<1000;i++){
    console.log(res);
  }
});
console.log('test end');
*/

// Building Simple Promises

const lotteryPromise = new Promise(function(resolve,reject){
console.log('Lottery Draw is happening 🪄');
setTimeout(function(){
if(Math.random() >= 0.5){
  resolve('You Win 🤑');
}
else{
  reject('You Lose 👎');
}
},2000);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

//Promisifying setTimeout
const wait = function(seconds){
  return new Promise(function(resolve){

    setTimeout(resolve, seconds*1000);

  });
}
wait(3).then(() => {
  console.log('I waited for 3 sec.')
  return wait(1);
});
