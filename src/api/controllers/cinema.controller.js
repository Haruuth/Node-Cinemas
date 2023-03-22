const Cinema = require("../models/cinema.models");
// const Movie = require("../models/movies.models");


const getCinema = async (req, res) => {
  try {
    const getCinemas = await Cinema.find()
    return res.status(200).json(getCinemas)
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getCinemaByName = async (req, res) => {
    try {
      const {name} = req.params;
      const cinemaName = await Cinema.find({name: name})
      return res.status(200).json(cinemaName); 
    } catch (error) {
      return res.status(500).json(error);
    }
  };

const getCinemaById = async (req, res) => {

  try {
    const {id} = req.params;
    const cinemaId = await Cinema.findById(id).populate("movies");
    if (!cinemaId) {
      return res.status(404).json({ "message": "not found" });
    }
    return res.status(200).json(cinemaId);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getCinemaByLocation = async (req, res) => {
  try {
    const { location } = req.params;
    const cinemaLoc = await Cinema.find({ location: location });
    return res.status(200).json(cinemaLoc);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getCinemaByMovies = async (req, res) => {
  try {
    const cinemaMov = await Cinema.find({ movies: movies });
    return res.status(200).json(cinemaMov);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCinema = async (req, res) => {
  try {
    // console.log(req.body);
    const newCinema = new Cinema(req.body);
    const createdCinema = await newCinema.save();
    return res.status(201).json(createdCinema);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putCinema = async (req, res) => {
  try {
    const { id } = req.params;
    const putCinema = new Cinema(req.body);
    putCinema._id = id;
    const updateCinema = await Cinema.findByIdAndUpdate(id, putCinema, {
      new: true,
    });
    if (!updateCinema) {
      return res.status(404).json({ message: "Cinema not found" });
    }
    return res.status(200).json(updateCinema);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCinema = async (req, res) => {
  try {
    const { id } = req.params;
    const allCinema = await Cinema.findByIdAndDelete(id);
    if (!deleteCinema) {
      return res.status(404).json({ message: "Movie not found" });
      const allCinema = await Cinema.find();
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCinema,
  getCinemaById,
  getCinemaByLocation,
  getCinemaByMovies,
  getCinemaByName,
  postCinema,
  putCinema,
  deleteCinema,
};
