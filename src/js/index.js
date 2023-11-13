import { fetchBreeds, createOptionCat } from './cat-api.js';

fetchBreeds()
  .then(res => {
    createOptionCat(res);
  })
  .catch(console.log);
