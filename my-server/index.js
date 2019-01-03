const path = require('path')
const express = require("express");
const workouts = require('./workouts');
const app = express();

app.get('/api/workouts', (req, res) =>
  res.send(workouts)
  );

app.post('/api/workout', (req, res) => 
  setTimeout(() => res.status(201).send(), 800)
);

app.post('/api/sign-in', (req, res) => res.status(200).send());

app.listen(8081, () => console.log('Server listening on port 8081!'));

