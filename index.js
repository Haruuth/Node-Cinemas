const express = require("express");
const dotenv = require("dotenv").config()
const {connect} = require("./src/utils/database") //Importamos nuestra funcion connect de nuestro archivo Database creado posteriormente.
// const routerClientes = require("./src/api/routes/clientes.routes");
const routerMovie = require("./src/api/routes/movies.routes");
const routerCinema = require("./src/api/routes/cinema.routes");

const PORT = process.env.PORT || 8000


const app = express();

connect()


app.use(express.json());
app.use(express.urlencoded({extended: false}));

//nuestras rutas
// app.use("/clientes", routerClientes);
app.use("/movies", routerMovie);
app.use("/cinema", routerCinema);

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));




 