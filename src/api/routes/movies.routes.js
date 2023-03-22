const express = require("express");

const router = express.Router();

const {getMovies, postMovies, putMovies, deleteMovies, getMoviesByGenre, getMoviesById, getMoviesByTitle, getMoviesByYear} = require ("../controllers/Movies.controllers")

router.get("/", getMovies);

router.get("/year/", getMoviesByYear);

router.get("/:id", getMoviesById);

router.get("/genre/:genre", getMoviesByGenre);

router.get("/title/:title", getMoviesByTitle);

router.put("/:id", putMovies);

router.post("/", postMovies);

router.put("/", putMovies);

router.delete("/", deleteMovies);

module.exports = router;