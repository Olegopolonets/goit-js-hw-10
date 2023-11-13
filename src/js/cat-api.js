// import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] = API_KEY;

// axios.defaults.baseURL = BASE_URL;
const BASE_URL = 'https://api.thecatapi.com/v1';
const END_POINT = '/v1/breeds';
const API_KEY =
  'live_Yy7eiFiKcvfhRTQ6mGY9ukQ7zQoyZgLCFw1Mfdp7iMlSKUQcZmv6LiNFLAu15R1n';
console.log(API_KEY);

export function fetchBreeds() {
  return fetch(`${BASE_URL}${END_POINT}?${API_KEY}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
