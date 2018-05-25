const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArticlesSchema = new Schema({
  title: String,
  body: String,
  author: String,
}, { timestamps: true });

ArticlesSchema.methods.toJSON = function() {
  return {
    title: this.title,
    body: this.body,
    author: this.author,
  };
};

mongoose.model('Articles', ArticlesSchema);