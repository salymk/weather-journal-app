// Setup empty JS object to act as endpoint for all routes
projectData = {};

const express = require('express');
const router = express.Router();

// GET Request that returns projectData
router.get('/weather', (req, res) => {
  res.send(projectData);
});


// POST Request that adds incoming data to projectData
router.post('/weather', (req, res) => {
  projectData.temperature = req.body.temperature;
  projectData.date = req.body.date;
  projectData.userResponse = req.body.userResponse;
});


module.exports = router;
