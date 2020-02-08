// to see results of this file:
// go to the terminal and navigate to the `bcryptDemo`: cd bcryptDemo
// run: node exampleWithPromises.js
// check the results of the console.log() in the terminal

const bcrypt = require("bcryptjs");
const saltRounds = 10;

const plainPassword1 = "HelloWorld";

bcrypt
  .genSalt(saltRounds)
  .then(salt => {
    console.log(`Salt: ${salt}`);

    return bcrypt.hash(plainPassword1, salt);
  })
  .then(hash => console.log(`Hash: ${hash}`))
  .catch(err => console.error(err.message));

// As you can see, salt is part of the hash:
// Salt: $2a$10$1WWyB9SwWk8vQnj4fgFDW.
