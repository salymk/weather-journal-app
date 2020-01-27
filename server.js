// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
// Here we are configuring express to use body-parser as middle-ware.
// 'use' method - allows us to connect packages to our project
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// cors for accessing resources from remote hosts
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = process.env.port || 3000;

const server = app.listen(port, ()=> {
  console.log(`Running on localhost: ${port}`);
});

// GET Request that returns projectData
app.get('/all', (req, res) => {
  res.send(projectData);
  console.log("GET Request");
});

// POST Request that adds incoming data to projectData

// app.post('/all', (req, res) => {
//   projectData.push(req.temparature);
//   projectData.push(req.date);
//   projectData.push(req.userResponse);
// });
