const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bookSchema = new Schema(
  {
    // unless you are defining more than the "type" property, you don't have to use {} (see below)
    // firstName: {type: String, require: true}
    title: String,
    description: String,
    author: { type: Schema.Types.ObjectId, ref: 'Author' },
    rating: Number
  },
  {
    timestamps: true
  }
);

// const Author = model('Author', authorSchema);
// module.exports = Author;

module.exports = model('Book', bookSchema);
