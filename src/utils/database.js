const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL


const connect = async () =>{
    try {
        
        //Aqui conectamos a la BBDD
        const db = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const {name, host} = db.connection;
        console.log(`Connected to ${name} DB in host : ${host}`)

    } catch (error) {
        console.log(`He tenido un error al conectar con mi BBDD ${error}`)
    }
};


module.exports = {connect};