/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let movieTitlesArr = [];

  for(let i =0; i < movies.length; i++){
    movieTitlesArr.push(movies[i].title);
  }
  return movieTitlesArr;
}
console.log(getAllMovieTitles(exampleMovies));
/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  let highestMetaScore = 0

    for(let i = 0; i < movies.length; i++){
        if(movies[i].metascore > highestMetaScore){
        highestMetaScore = movies[i].metascore;
        }
    }
    return Number(highestMetaScore);
}
console.log(getHighestMetascore(exampleMovies, 96));

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  let total = 0;

  if(movies.length === 0){
    return 0;
  }

  for(let i = 0; i < movies.length; i++){
    total += Number(movies[i].imdbRating);
  }
  return total / movies.length;

}
//console.log(getAverageIMDBRating(exampleMovies));

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  let countOfAllRatings = {};

  for(let i = 0; i < movies.length; i++){
    if(!countOfAllRatings[movies[i].rated]){
      countOfAllRatings[movies[i].rated] = 1;
    }else {
      countOfAllRatings[movies[i].rated] += 1;
    }
  }
  return countOfAllRatings;
}
//console.log(countByRating(exampleMovies));

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, targetId) {
  if(!movies.length){
    return null;
    }      
  
  let findMovieId = {};
  for(let i = 0; i < movies.length; i++){
    if(movies[i].imdbID === targetId){  
    return movies[i];
    } 
  }
  return null;
}
  
//console.log(findById(exampleMovies, "tt3606756"));
/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let movieGenreArr = [];

  // if(!movies.length){
  //   return [];
  // }
  for(movie of movies){
    let newGenre = movie.genre.toUpperCase();
    if(newGenre.includes(genre)){
      movieGenreArr.push(movie);
    }else if(movie.genre.includes(genre)){
      movieGenreArr.push(movie)
    }
  }
  return movieGenreArr;
}
//console.log(filterByGenre(exampleMovies, "Action"))
/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let movieArr = [];
  let movieByReleasedYear = [];

  if(!movies.length){
    return movieArr;
  }
  for(let movie of movies){
    let movieReleased = movie.released;
      movieByReleasedYear = movieReleased.split(" ");
      if(movieByReleasedYear[2] <= year){
        movieArr.push(movie);
      }
  }
  return movieArr;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies){
  // if(movies.length){
  //  return null;
  // }
  let bigBoxMovie = 0;
  let title = null;

  for(let movie of movies){
    let newBoxMovie = Number(movie.boxOffice.slice(1).split(",").join(""));
      if(newBoxMovie > bigBoxMovie){
        bigBoxMovie = newBoxMovie
        title = movie.title;
      }
  }
  return title;
}
//console.log(getBiggestBoxOfficeMovie(exampleMovies, "Moana"));

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
