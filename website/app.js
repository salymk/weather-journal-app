/* Global Variables */
const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '4907ba32968f69e6ea7d3c1d52b828d5';


// DOM Variables
const zipCode = document.querySelector('.zipcode');
const journalSummary = document.querySelector('.journal-summary');
const outputSection = document.querySelector('.outputSection');
const formInput = document.querySelector('.form-input');
const saveBtn = document.querySelector('.save');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'/'+ d.getDate()+'/'+ d.getFullYear();

// getWeather();

// Function to get weather data from server
async function getWeather(userZip) {
  const response = await fetch(`${url}${userZip},us&appid=${apiKey}&units=imperial`);
  const weather = await response.json();
  postData('http://localhost:4000/api/weather', {
    temperature: weather.main.temp,
    date: newDate,
    userResponse: journalSummary.value
  });

  // Create a new journal
  const newJournal = createJournal(weather.main.temp, newDate);
  // Add new journal to website
  outputSection.appendChild(newJournal);
  formInput.reset();

  console.log(weather);
}

// Function to create new journal entries
function createJournal (temp, date) {
  // Create Elements
  const article = document.createElement('article');
  const cardHeader = document.createElement('h4');
  const cardBody = document.createElement('div');
  const cardTitle = document.createElement('h5');
  const cardSubTitle = document.createElement('h6');
  const cardText = document.createElement('p');

  // Add content to cards
  cardHeader.textContent = `Zip: ${zipCode.value}`;
  cardTitle.innerHTML = `Today's weather is: ${temp}<span style="color: black;">°F</span>`;
  cardSubTitle.textContent = date;
  cardText.textContent = journalSummary.value;

  // Create the card
  article.appendChild(cardHeader);
  article.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubTitle);
  cardBody.appendChild(cardText);

  // Add classes to the Elements
  article.classList.add('card', 'bg-light', 'mb-3');
  cardHeader.classList.add('card-header');
  cardBody.classList.add('card-body', 'mb-0');
  cardTitle.classList.add('card-title');
  cardSubTitle.classList.add('card-subtitle', 'text-muted');
  cardText.classList.add('card-text', 'mt-4');

  return article;
}

// Start the process
saveBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  getWeather(zipCode.value)
    .then(response => {
      console.log('Zip Code Received!')
    })
    .catch(error => {
        console.log('Error!');
        console.error(error);
      });
});


// POST method implementation:
async function postData(url = '', data = {temperature, date, userResponse}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}


fetch('/weather')
  .then(response => {
    console.log(response);
  });




























//
// saveBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//
//   fetch(`${url}${zipCode.value},us&appid=${apiKey}&units=imperial`)
//     .then( res => res.json())
//     .then( data => {
//       let newJournal =
//       `
//       <div class="card bg-light mb-3" style="max-width: 20rem;">
//         <div class="card-header">${zipCode.value}</div>
//         <div class="card-body">
//           <h4 class="card-title">Today's weather is: ${data.main.temp}</h4>
//           <h6 class="card-subtitle text-muted">${newDate}</h6>
//           <p class="card-text mt-3">${journalSummary.value}</p>
//         </div>
//       </div>
//       `;
//
//       outputSection.innerHTML += newJournal;
//
//       formInput.reset();
//     });
// });
