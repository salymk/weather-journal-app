/* Global Variables */
const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '4907ba32968f69e6ea7d3c1d52b828d5';


// DOM Variables
const zipCode = document.querySelector('.zipcode');
const journalSummary = document.querySelector('.journal-summary');
const outputSection = document.querySelector('.outputSection');
const formInput = document.querySelector('.form-input');
const saveBtn = document.querySelector('.generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'/'+ d.getDate()+'/'+ d.getFullYear();

// Function to get weather data from api
async function getWeatherAPI(userZip) {
  const response = await fetch(`${url}${userZip},us&appid=${apiKey}&units=imperial`);
  const weather = await response.json();
  postData('http://localhost:4000/api/weather', {
    temp: weather.main.temp,
    date: newDate,
    userResponse: journalSummary.value,
    zipcode: zipCode.value
  });

  // Create a new journal
  const newJournal = createJournal(weather.main.temp, newDate);
  // Add new journal to website
  outputSection.appendChild(newJournal);
  formInput.reset();

  console.log(weather);
}

// Function to post data
const postData = async (url = '', data = {temp, date, userResponse}) => {
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  // try {
  //   const newData = await response.json();
  //   // return newData;
  // }
  // catch (error) {
  //   console.log('Error', error)
  // }
}


// Function to GET projectData
const retrieveData = async () => {
  const request = await fetch('/api/weather');
  try {
    // Transform into JSON
    const weatherDataArray = await request.json();
    
    for (let weatherData of weatherDataArray) {
      const newJournal = createJournal(weatherData.temp, weatherData.date, weatherData.userResponse, weatherData.zipcode);
      // Add new journal to website
      outputSection.appendChild(newJournal);
    }
    console.log(weatherData);
  }
  catch (error) {
    console.log("Error", error);
  }
}


// Function to create new journal entries
function createJournal (temp, date, summary = journalSummary.value, zipcode = zipCode.value) {
  // Create Elements
  const article = document.createElement('article');
  const cardHeader = document.createElement('h4');
  const cardBody = document.createElement('div');
  const cardTitle = document.createElement('h5');
  const cardSubTitle = document.createElement('h6');
  const cardText = document.createElement('p');

  // Add content to cards
  cardHeader.textContent = `Zip: ${zipcode}`;
  cardTitle.innerHTML = `Today's weather is: ${temp}<span style="color: black;">°F</span>`;
  cardSubTitle.textContent = date;
  cardText.textContent = summary;

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
  getWeatherAPI(zipCode.value)
    .then(response => {
      console.log('Zip Code Received!')
    })
    .catch(error => {
      console.log('Error!');
      console.error(error);
    });
});

// For online storage
retrieveData();