const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  article_Date:{ type: String, required: true},
  dateSaved: { type: Date, default: Date.now }
});

const article = mongoose.model("Article", articleSchema);

module.exports = article;