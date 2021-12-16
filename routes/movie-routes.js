const express = require('express');
const router = express.Router();


const movieController = require('../controllers/movie-controller');

router.get("/results/movie/:imdbID", movieController.getMovieByID)

router.get("/results/:movieName", movieController.getMoviesByTitle)

module.exports = router;