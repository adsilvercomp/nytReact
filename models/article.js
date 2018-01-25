const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  date: String,
  dateSaved: { type: Date, default: Date.now }
});

const article = mongoose.model("article", articleSchema);

module.exports = article;