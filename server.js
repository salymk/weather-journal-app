// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
// bodyParser for Middleware
const bodyParser = require('body-parser');
// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors for accessing resources from remote hosts
const cors = require('cors');
app.use(cors);

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, listening);

function listening() {
  console.log("Server Running");
  console.log(`Running on local host: ${port}`);
}
