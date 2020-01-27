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
  console.log(req.body);
  res.send({
    type: 'POST',
    temperature: req.body.temperature,
    date: req.body.date,
    userResponse: req.body.userResponse
  });
  projectData.push(req.body);
});



module.exports = router;
