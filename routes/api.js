// Setup empty JS object to act as endpoint for all routes
const projectData = {};

const express = require('express');
const router = express.Router();

// GET Request that returns projectData
router.get('/getWeather', (req, res) => {
  res.send(projectData);
});


// POST Request that adds incoming data to projectData
router.post('/weather', (req, res) => {
  projectData.temperature = req.body.temperature;
  projectData.date = req.body.date;
  projectData.userResponse = req.body.userResponse;
  // const data = req.body;
  // projectData.push(data);
  // res.json(projectData);
  // console.log(projectData);
});


module.exports = router;
