const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    nombre: String,
    link: String
  });
  const Video = mongoose.model('Video', videoSchema, 'videos');

  module.exports = Video;