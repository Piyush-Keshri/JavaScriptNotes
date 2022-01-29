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

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. 
For that, you will use a second API to geocode coordinates.
Here are your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name.
   Use this API to do reverse geocoding: https://geocode.xyz/api.
   The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json.
   Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location.
   Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403.
   This is an error with the request. Remember, fetch() does NOT reject the promise in this case.
   So create an error to reject the promise yourself, with a meaningful error message.
   
PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀
*/