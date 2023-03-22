const mongoose = require("mongoose");



//obtenemoos el esquema de mmongoosoe

const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
    {
        name: {type: String, require: true},
        location: {type: String, require: true},
        movies: [{type: Schema.Types.ObjectId, ref: "movies"}]
    },{
        timestamps: true
    }
);

//generamos el modelo de nuestra entidad en base a nuestro schema
const Cinema = mongoose.model("cinema", cinemaSchema);

module.exports = Cinema;