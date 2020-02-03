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

saveBtn.addEventListener('click', (e) => {
  e.preventDefault();

  fetch(`${url}${zipCode.value},us&appid=${apiKey}&units=imperial`)
    .then( res => res.json())
    .then( data => {
      let newJournal =
      `
      <div class="card bg-light mb-3" style="max-width: 20rem;">
        <div class="card-header">${zipCode.value}</div>
        <div class="card-body">
          <h4 class="card-title">Today's weather is: ${data.main.temp}</h4>
          <h6 class="card-subtitle text-muted">${newDate}</h6>
          <p class="card-text mt-3">${journalSummary.value}</p>
        </div>
      </div>
      `;

      outputSection.innerHTML = newJournal;
      formInput.reset();
    });
});
