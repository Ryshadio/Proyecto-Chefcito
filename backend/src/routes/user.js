const express = require("express");

const router = express.Router();

const userSchema = require("../models/user");


// crear usuario
router.post("/users", (req,res) =>{
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// obtener todos los usuarios
router.get("/users", (req,res) =>{
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


// obtener un usuario
router.get("/users/:id", (req,res) =>{
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// actualizar un usuario
router.put("/users/:id", (req,res) =>{
    const { id } = req.params;
    const { name, lastname, age, email, pass } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { name, lastname, age, email, pass } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// eliminar a un usuario
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findOneAndRemove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});




router.post('/login', async (req, res) => {
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

module.exports = router;