const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArticlesSchema = new Schema({
  title: String,
  body: String,
  author: String,
}, { timestamps: true });

ArticlesSchema.methods.toJSON = function() {
  return {
    _id: this._id,
    title: this.title,
    body: this.body,
    author: this.author,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

mongoose.model('Articles', ArticlesSchema);