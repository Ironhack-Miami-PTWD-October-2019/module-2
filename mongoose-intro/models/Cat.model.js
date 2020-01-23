const mongoose = require('mongoose');

// if we would want to deconstruct Schema and model from mongoose:
// const { Schema, model } = mongoose;

// here we are getting access to Schema class from mongoose
// if we would use deconstruction mentioned above, we wouldn't use this line any more
const Schema = mongoose.Schema;

// Schema defines the STRUCTURE of documents in the collection
// this is the BLUEPRINT for all instances
const catSchema = new Schema({
  // name: String,
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 0,
    max: 30
  },
  color: {
    type: String,
    minlength: 3,
    maxlength: 15
  },
  toys: [{ type: String, minlength: 2 }],
  country: {
    type: String,
    // reg expression that matches a string of exactly 2 uppercase letters
    match: /^[A-Z][A-Z]$/
  },
  photoUrl: {
    type: String,
    // reg expression that matches a string that starts with http or https
    match: /^https?:\/\//,
    default:
      'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
});

// Cat is our mongoose model class
// all cats in cats collection will share these properties
// Mongoose turns models name to a collection name (Cat --> cats)
const Cat = mongoose.model('Cat', catSchema);
// if we would use deconstruction mentioned above, we would have: const Cat = model('Cat', catSchema);

module.exports = Cat;
// the same as above just in one line
// module.exports = mongoose.module("Cat", catSchema);
