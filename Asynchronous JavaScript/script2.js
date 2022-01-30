const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

//---------------------| Consuming Promises With AsyncAwait |---------------------------//

//This function is an async function that means it will be running in the background,
// while performing the code thats inside of it. Then when the function is done it automatically returns a promise.
// Inside an async function we can have more than One await statements.

const getPosition = function () {

    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject);
    })

}

const whereAmI = async function(){
try{
// GeoLocation
const pos = await getPosition();
const{latitude:lat,longitude:lng} = pos.coords;

// Reverse Geocoding
const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

if(!resGeo.ok)
throw new Error('Problem getting location Data');

const dataGeo = resGeo.json;
console.log(dataGeo);

//Country Data
const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
if(!resGeo.ok)
throw new Error('Problem Getting Country');

const data = await res.json();
console.log(data);
renderCountry(data[0]);
}
catch(err){
    console.log(`${err}`);

}
}

whereAmI();