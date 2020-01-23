const mongoose = require('mongoose');

// import/require the model
const Cat = require('./models/Cat.model');
// const Cat = require("./models/Cat.model.js"); => you don't have to use ".js"

// CONNECT YOUR APP TO THE MONGODB
mongoose
  //                                cats-app-dev is the name of our database
  //                                   |
  .connect('mongodb://localhost/cats-app-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));

// ****************************************************************************************************
// ****************************************************************************************************
// Create new cats (insert document in the DB (uses insertOne() and insertMany()))
// ----------------------------------------------------------------------------

// .create() is a mongoose method and under the hood uses insertOne and insertMany
Cat.create({ name: 'Garfield', age: 13, color: 'orange' })
  .then(catDoc => console.log(`Cat create worked well: ${catDoc}`))
  .catch(error =>
    console.log(`Creating a new cat went wrong! Try again 😞 ${err}`)
  );

// pattern: ModelName.create().then().catch()

//     const sandrasCat = new Cat({ name: "Milo", age: 4 });
//     sandrasCat
//         .save()
//         .then(newCat => console.log(`A created cat is: ${newCat}`))
//         .catch(err => console.log(`Error while creating a cat! ${err}`));

// ****************************************************************************************************
// ****************************************************************************************************
// Reading the cats from DB (use find(), findOne(), findById())
// ----------------------------------------------------------------------------

// .find() we are always getting array back as a response
Cat.find({ age: { $gt: 10 } })
  .then(catDoc => console.log('Found this 🐈: ', catDoc))
  .catch(err => console.log('Error while getting the cats: ', err));

// .findById() we are always getting object back as a response
Cat.findById('5d48d51c036739dace0141c8')
  .then(foundCat => console.log('Found this cat by their ID: ', foundCat))
  .catch(err => console.log('Error while getting the cats: ', err));

// ****************************************************************************************************
// ****************************************************************************************************
// Updating cats in the DB
// ----------------------------------------------------------------------------

Cat.findByIdAndUpdate('5d48d51c036739dace0141c8', {
  $set: { name: 'Sandra', age: 17 }
})
  .then(updatedCat => console.log('Updated cat: ', updatedCat))
  .catch(err => console.log('Error while updating the cat: ', err));

Cat.updateMany({ name: 'Garfield' }, { $inc: { age: 1 } }) // age = age + 1
  .then(updatedCats => console.log('Updated cats: ', updatedCats))
  .catch(err => console.log('Error while updating cats: ', err));

// ****************************************************************************************************
// ****************************************************************************************************
// Deleting cats from DB
// ----------------------------------------------------------------------------

Cat
  // .findByIdAndRemove() works the same as .findByIdAndDelete()
  .findByIdAndDelete('5d48d2676ca362daa1ced681')
  .then(deletedCat => console.log(`Deleted cat with id: ${deletedCat._id}`))
  .catch(err => console.log('Error while deleting one cat: ', err));

Cat.deleteMany({ name: 'Garfield' })
  .then(deletedCats => {
    console.log('deleted: ', deletedCats);
    // deletedCats.forEach(oneCat =>  console.log(`Deleted cat with id: ${oneCat._id}`));
  })
  .catch(err => console.log('Error while deleting one cat: ', err));
