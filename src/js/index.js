import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
const selectBreed = document.querySelector('.breed-select');
const catCard = document.querySelector('.cat-info');
const loader = document.querySelector('.heading');

fetchBreeds()
  .then(res => {
    selectBreed.classList.remove('is-hidden');
    showDogs.classList.remove('is-hidden');
    loader.classList.add('is-hidden');
    createOptionCat(res);
  })
  .catch(err => {
    Notify.failure(`❌Oops! Something went wrong! Try reloading the page! `);
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

selectBreed.addEventListener('change', () => {
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
      Notify.failure(`❌Oops! Something went wrong! Try reloading the page!`);
    })
    .finally(() => {
      loader.classList.add('is-hidden');
    });
});

const backdrop = document.querySelector('.backdrop');
const showDogs = document.querySelector('.show-dogs');
const noButton = document.getElementById('no-btn');
const yesButton = document.getElementById('yes-btn');
const popup = document.getElementById('popup');

showDogs.addEventListener('click', modal);

function modal() {
  backdrop.classList.add('is-open');
}

backdrop.addEventListener('click', event => {
  const target = event.target;
  if (target.classList.contains('backdrop')) {
    backdrop.classList.remove('is-open');
    Notify.success(`Good choice`);
  }
});

noButton.addEventListener('mouseover', () => {
  noButton.style.position = 'absolute';
  noButton.style.left = Math.random() * 80 + 'vw';
  noButton.style.top = Math.random() * 80 + 'vh';
});

function closeModal() {
  backdrop.classList.remove('is-open');
  popup.style.display = 'none';
}

yesButton.addEventListener('click', () => {
  popup.style.display = 'block';
  setTimeout(() => {
    closeModal();
  }, 1500);
});

noButton.addEventListener('click', () => {
  Notify.failure(`❌ Do you use cheats? Then we're done.`);
  setTimeout(() => {
    closeModal();
  }, 1500);
});

document.addEventListener('DOMContentLoaded', function () {
  loader.classList.add('is-hidden');
});

loader.addEventListener('load', function () {
  loader.classList.remove('is-hidden');
});
