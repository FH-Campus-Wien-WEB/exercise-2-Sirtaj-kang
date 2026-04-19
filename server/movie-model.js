/* Task 1.1. Add your movie data here
   and export it so it's available in server.js */

const movies = {
  tt0317219: {
   "Title":"Cars",
   "Released":"2006-06-09",
   "Runtime":116,
   "Genres":["Animation", "Adventure", "Comedy"],
   "Directors":["John Lasseter", "Joe Ranft"],
   "Writers":["Dan Fogelman", "John Lasseter", "Joe Ranft"],
   "Actors":["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
   "Plot":"On the way to the biggest race of his life, a hotshot rookie race car gets stranded in a rundown town and learns that winning isn't everything in life.",
   "Poster":"https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg",
   "Metascore":73,
   "imdbRating":7.3,
   "imdbID":"tt0317219"
},

tt0816692: {
   "Title":"Interstellar",
   "Released":"2014-11-07",
   "Runtime":169,
   "Genres":["Adventure", "Drama", "Sci-Fi"],
   "Directors":["Christopher Nolan"],
   "Writers":["Jonathan Nolan", "Christopher Nolan"],
   "Actors":["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
   "Plot":"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
   "Poster":"https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg",
   "Metascore":74,
   "imdbRating":8.7,
   "imdbID":"tt0816692"
},

  tt33014583: {
   "Title":"Dhurandhar",
   "Released":"2025-12-05",
   "Runtime":214,
   "Genres":["Action", "Adventure", "Crime"],
   "Directors":["Aditya Dhar"],
   "Writers":["Aditya Dhar", "Ojas Gautam", "Shivkumar V. Panicker"],
   "Actors":["Ranveer Singh",  "Akshaye Khanna", "Sanjay Dutt"],
   "Plot":"A mysterious traveler slips into the heart of Karachi's underbelly and rises through its ranks with lethal precision, only to tear the notorious ISI-Underworld nexus apart from within.",
   "Poster":"https://m.media-amazon.com/images/M/MV5BMzFiNTVkZjYtM2I3Yi00MGNjLWEyYTAtMGViNGExZmMzMGMzXkEyXkFqcGc@._V1_SX300.jpg",
   "Metascore":null,
   "imdbRating":8.3,
   "imdbID":"tt33014583"
}
};

module.exports = movies;
