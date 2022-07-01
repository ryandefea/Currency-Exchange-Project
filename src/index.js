import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

import CurrencyService from './currency-service.js';


const service = new CurrencyService();
//function getCurrencyInfo(country, amount) {

//}



async function makeApiCall(country, amount) {
  const response = await service.getCurrency(country, amount);
  //getCurrencyInfo(response);
  console.log(response);
}

$(document).ready(function() {
  $('#moneySubmit').click(function () {
    let amount = parseInt($('#amount').val());
    let country = $('#country').val();
    makeApiCall(country, amount);
  })
})