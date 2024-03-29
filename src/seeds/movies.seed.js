const mongoose = require("mongoose");
const Movies = require("../api/models/movies.models");
const dotenv = require("dotenv").config()
const DB_URL = process.env.DB_URL;

const movies = [
  {
    title: "The Matrix",
    director: "Hermanas Wachowski",
    year: 1999,
    genre: "Acción",
  },
  {
    title: "The Matrix Reloaded",
    director: "Hermanas Wachowski",
    year: 2003,
    genre: "Acción",
  },
  {
    title: "Buscando a Nemo",
    director: "Andrew Stanton",
    year: 2003,
    genre: "Animación",
  },
  {
    title: "Buscando a Dory",
    director: "Andrew Stanton",
    year: 2016,
    genre: "Animación",
  },
  {
    title: "Interestelar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Ciencia ficción",
  },
  {
    title: "50 primeras citas",
    director: "Peter Segal",
    year: 2004,
    genre: "Comedia romántica",
  },
];
const movieDocuments = movies.map((movie) => new Movies(movie));
mongoose
  .connect(
    process.env.DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(async () => {
    const allMovies = await Movies.find();
    if (allMovies.length) {
      await Movies.collection.drop();
      console.log("Datos eliminados");
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    const moviesMap = movies.map((movie) => new Movies(movie));
    await Movies.insertMany(movieDocuments);
    console.log("Datos Creados");
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());


