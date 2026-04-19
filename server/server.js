const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json()); 

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for all movies..
app.get('/movies', function (req, res) {
  /* Task 1.2. Remove the line below and return the movies from 
     the model as an array */
  res.json(Object.values(movieModel));
})

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  const movie = movieModel[req.params.imdbID];
  if (movie) {
    res.json(movie);
  } else {
    res.sendStatus(404);
  }
})

// Configure a 'put' endpoint to save movie updates
app.put('/movies/:imdbID', function (req, res) {
  const imdbID = req.params.imdbID;
  const movie = req.body;

  if (!movie || typeof movie !== 'object') {
    return res.sendStatus(400);
  }

  if (!movie.imdbID) {
    movie.imdbID = imdbID;
  }

  if (movie.imdbID !== imdbID) {
    return res.sendStatus(400);
  }

  movieModel[imdbID] = movie;
  res.sendStatus(204);
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

