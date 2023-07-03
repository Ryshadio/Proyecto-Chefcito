const express = require('express');
const mongoose = require ("mongoose");
const userRoutes = require("./routes/user");
const videosRoutes = require("./routes/videos");
const cors = require('cors');
require("dotenv").config();
const userSchema = require("./models/user");
const videoSchema = require("./models/videos");
const Video = require('./models/videos');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongoURL = process.env.MONGODB_URI;
const dbName = 'users';
app.use('/api', userRoutes);
app.use( cors());

app.post('/login', async (req, res) => {
    const { email, pass } = req.body;
  
    try {
      const user = await userSchema.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const isMatch = await pass === user.pass;
  
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      res.json({ message: 'Logged in successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
});

app.post('/register', async (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => console.log(data))
        .catch((error) => res.json({ message: error }));




})




app.post('/guardar-video', async (req, res) => {
  try {
    const { nombre, link } = req.body;

    const video = new Video({ nombre, link });

    await video.save();

    res.json(video);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al guardar el video' });
  }
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