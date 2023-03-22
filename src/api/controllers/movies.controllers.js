const Movies = require("../models/movies.models")

//recupera informacion
const getMovies = async (req, res) => {
  try {
    const allMovies = await Movies.find();
    return res.status(200).json(allMovies); //devuelvo los datos en formato json con un status 200
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMoviesById = async (req, res) => {
  try {
    const { id } = req.params;
    const allMovies = await Movies.findById(id);
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMoviesByGenre = async (req, res) => {
  try {
    const { genre } = req.params;
    const allMovies = await Movies.find({ genre: genre });
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMoviesByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const allMovies = await Movies.find({ title: title });
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMoviesByYear = async (req, res) => {
  //const { year } = req.params;
  try {
    const allMovies = await Movies.find({ year: { $gt: "2010" } });
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json(error);
  }
};

//inserta una informacion
const postMovies = async (req, res) => {
  try {
    const newMovie = new Movies(req.body);
    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

//actualiza la informacion
const putMovies = async (req, res) => {
  try {
    const { id } = req.params;
    const putMovie = new Movies(req.body);
    putMovie._id = id;
    const modifiedMovie = await Movies.findByIdAndUpdate(id, putMovie); // buscamos por id y actualizamos el elemento
    if (!modifiedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    return res.status(200).json(modifiedMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

//borra la información
const deleteMovies = async (req, res) => {
  try {
    const { id } = req.params;
    const allMovies = await Movies.findByIdAndDelete(id);
    return res.status(404).json(allMovies);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMovies,
  getMoviesById,
  getMoviesByGenre,
  getMoviesByTitle,
  getMoviesByYear,
  postMovies,
  putMovies,
  deleteMovies,
};
