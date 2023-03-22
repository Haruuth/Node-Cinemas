const mongoose = require("mongoose");

//obtenemoos el esquema de mongoose

const Schema = mongoose.Schema;

const moviesSchema = new Schema(
    {
        title: {type: String, require: true},
        director: {type: String, require: true},
        year: {type: String, require: true},
        genre: {type: String, require: true},
    },{
        timestamps: true
    }

);

//generamos el modelo de nuestra entidad en base a nuestro schema
const Movies = mongoose.model("movies", moviesSchema);

module.exports = Movies;