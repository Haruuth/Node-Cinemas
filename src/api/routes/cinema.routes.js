const express = require("express");

const router = express.Router();

const {
  getCinema,
  postCinema,
  putCinema,
  deleteCinema,
  getCinemaByName,
  getCinemaById,
  getCinemaByLocation,
  getCinemaByMovies,

} = require("../controllers/cinema.controller");

router.get("/", getCinema);
router.get("/:id", getCinemaById);
router.get("/movies/:movies", getCinemaByMovies);
router.get("/location/:location", getCinemaByLocation);
router.get("/name/:name", getCinemaByName);
router.post("/", postCinema);
router.put("/:id", putCinema);
router.put("/", putCinema);
router.delete("/", deleteCinema);

module.exports = router;
