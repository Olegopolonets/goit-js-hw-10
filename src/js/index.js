import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as basicLightbox from 'basiclightbox';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
const selectBreed = document.querySelector('.breed-select');
const catCard = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const showDogs = document.querySelector('.show-dogs');

fetchBreeds()
  .then(res => {
    selectBreed.classList.remove('is-hidden');
    showDogs.classList.remove('is-hidden');
    loader.classList.add('is-hidden');
    createOptionCat(res);
  })
  .catch(err => {
    Notify.failure(`❌${err} `);
  })
  .finally(() => {
    loader.classList.add('is-hidden');
  });

function createOptionCat(res) {
  let arrayOption = res.map(item => {
    return `<option value=${item.id}> ${item.name} </option>`;
  });
  selectBreed.insertAdjacentHTML('beforeend', arrayOption.join(''));
}

function createMarkup(item) {
  return `
  <div class="cat-card">
    <img src="${item.url}" alt="${item.breeds[0].name}" class="cat-img" />
  
  <p class="cat-name">${item.breeds[0].name}</p>
  <p class="cat-description">${item.breeds[0].description}</p>
  <p class="cat-temperament"> <span class="cat-temperament-title">Temperament: </span>${item.breeds[0].temperament}</p>
  </div>
  `;
}

selectBreed.addEventListener('click', () => {
  selectBreed.classList.toggle('up');
  if (!selectBreed.classList.contains('up')) {
    loader.classList.remove('is-hidden');
    catCard.classList.add('is-hidden');
    const currentCat = selectBreed.value;
    fetchCatByBreed(currentCat)
      .then(res => {
        catCard.classList.remove('is-hidden');
        // loader.classList.add('is-hidden');
        const card = createMarkup(res[0]);
        catCard.innerHTML = card;
      })
      .catch(err => {
        Notify.failure(`❌I can't process it. ${err}`);
      })
      .finally(() => {
        loader.classList.add('is-hidden');
      });
  }
});
