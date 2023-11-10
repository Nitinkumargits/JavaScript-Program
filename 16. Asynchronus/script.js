'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
///////////////////////////////////////////////////////////////////////

//Rendering....
const renderCountry = function (data, className = ' ') {
  const html = `
   <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
       <h3 class="country__name">${data.name}</h3>
       <h4 class="country__region">${data.region}</h4>
       <p class="country__row"><span>👫</span>${(
         +data.population / 1000000
       ).toFixed(1)} people</p>
       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
   </div>
 </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
//First AJAX call .

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//    <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//        <h3 class="country__name">${data.name}</h3>
//        <h4 class="country__region">${data.region}</h4>
//        <p class="country__row"><span>👫</span>${(
//          +data.population / 1000000
//        ).toFixed(1)} people</p>
//        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//    </div>
//  </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('usa');
// // getCountryData('russia');

//////////////////////////////////////////////
//Sequence of AJAX call

// const getCountryAndNeighbour = function (country) {
//   //AJAX call 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //Render country 1
//     renderCountry(data);

//     //get neighbour country 2
//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     //AJAX call 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbour('portugal');

//////////////////////////////////////////////
//Promises

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (respose) {
//       console.log(respose);
//       return respose.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
///////////////////////////////

const getJSON = function (url, errorMsg = 'Somethin went wrong') {
  return fetch(url).then(Response => {
    if (!Response.ok) {
      throw new Error(`${errorMsg} ${Response.status}`);
    }
    return Response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      //optional chaining
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found !');

      // error for second country
      // const neighbour = 'abdfsdf';

      //country 2
      getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found '
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}❌ 🐸 ❌`);
      renderError(`Something went wrong ${err.message}❌ 🐸 ❌. Try again !`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
