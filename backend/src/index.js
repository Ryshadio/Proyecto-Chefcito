const express = require('express');
const mongoose = require ("mongoose");
const userRoutes = require("./routes/user");
const cors = require('cors');
require("dotenv").config();
const userSchema = require("./models/user");
const app = express();
const port = 3000;

app.use(express.json());
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