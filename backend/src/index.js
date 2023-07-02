const express = require('express');
const mongoose = require ("mongoose");
const userRoutes = require("./routes/user");
const cors = require('cors');
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', userRoutes);
app.options('/api/login', cors());
app.get('/', (req,res) => {
    res.send("Bienvenido, Rey");
});
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

const database = module.exports = async () => {

    const connectionParams = {

        useNewUrlParser: true,

        useUnifiedTopology: true,

    }

    try {

        await mongoose.connect(
            
            process.env.MONGODB_URI,
            
            connectionParams
            
            );

        console.log('Conexión establecida');

    } catch (error) {

        console.log(error);

        console.log("falló la conexión");

    }

}

database();

app.listen(port, () => console.log(`app listening at http://localhost:3000`));