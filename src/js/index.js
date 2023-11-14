import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
const selectBreed = document.querySelector('.breed-select');
const catCard = document.querySelector('.cat-info');

fetchBreeds()
  .then(res => {
    createOptionCat(res);
  })
  .catch(console.log);

function createOptionCat(res) {
  let arrayOption = res.map(item => {
    return `<option value=${item.id}> ${item.name} </option>`;
  });
  selectBreed.insertAdjacentHTML('beforeend', arrayOption.join(''));
}

function createMarup(item) {
  return `
  <div class=""cat-card>
    <img src="${item.url}" alt="${item.breeds[0].name}" class="cat-img" />
  
  <p class="cat-name">${item.breeds[0].name}</p>
  <p class="cat-description">${item.breeds[0].description}</p>
  <p class="cat-temperament">${item.breeds[0].description}</p>
  </div>
  `;
}

selectBreed.addEventListener('click', () => {
  const currentCat = selectBreed.value;
  fetchCatByBreed(currentCat)
    .then(res => {
      console.dir(res[0]);
      const card = createMarup(res[0]);
      catCard.innerHTML = card;
    })
    .catch(console.log());
});
