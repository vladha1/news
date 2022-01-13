const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
   Title: String,
      Source: String,
      Published: String,
      Summary_Detail: String,
      link: String,
      _id: String,
      Tags: String


})

module.exports = new mongoose.model('News', newsSchema)