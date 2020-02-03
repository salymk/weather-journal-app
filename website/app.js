/* Global Variables */
const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '4907ba32968f69e6ea7d3c1d52b828d5';

const zipCode = document.querySelector('.zipcode');
const journalSummary = document.querySelector('.journal-summary');
const outputSection = document.querySelector('.outputSection');
const formInput = document.querySelector('.form-input');
const saveBtn = document.querySelector('.save');


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

fetch(url + '80015' + ',us&appid=' + apiKey)
  .then( res => res.json())
  .then( data => console.log(data));
