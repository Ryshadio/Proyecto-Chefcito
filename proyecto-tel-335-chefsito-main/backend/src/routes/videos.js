const express = require("express");

const router = express.Router();

const videoSchema = require("../models/videos");


router.post('/guardar-video', async (req, res) => {
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