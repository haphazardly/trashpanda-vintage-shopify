import axios from 'axios';

let productUrl = window.location.pathname + '.js';

axios.get(productUrl)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })