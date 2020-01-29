/* Global Variables */

const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '4907ba32968f69e6ea7d3c1d52b828d5';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

fetch(url + '80015' + ',us&appid=' + apiKey)
  .then( res => res.json())
  .then( res => console.log(res));

const testFunc = async () => {
  const response = await fetch(url + '80015' + ',us&appid=' + apiKey);
  const jsonResponse = await response.json();
  console.log(jsonResponse)
}

testFunc();
