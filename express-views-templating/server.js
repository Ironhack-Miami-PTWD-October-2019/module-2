// console.log('Running server.js ahhahahha');

/// ALL GLOBAL VARIABLES AND PACKAGES

//   name you give	   name of the package you installed
//       |                    |
const myExpress = require('express');

// package that allows templating and dynamic views
const hbs = require('hbs');

require('dotenv').config();

// here we are creating application
const app = myExpress();

//************ static files ****************************
// Connect "public/" folder to our express app
// makes everything inside public folder accessible to the rest of the app
app.use(myExpress.static('public'));

// sets hbs as default view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// import fake data:
const theData = require('./fake-data.js');

// ***********************************
// ROUTES:
// ***********************************

///////////////////////////////////////////////////////////////////////////////
// ****************************** HBS ROUTES *********************************
///////////////////////////////////////////////////////////////////////////////

//      '/students' => means localhost:3000/students <===> get the students' data when users hit this route
//       ^
//       |    callback function as 2nd argument
app.get('/students', (req, res) => {
  const justNames = theData.map(element => element.firstName);
  //   console.log(justNames);

  //            it's already pre-fixed with "/views/" that's why
  //            we don't have to put the full path here
  //                    ^
  //                    |
  res.render('hbs-files/students-data.hbs', { studentNames: justNames });
  // "render()" sends a template file as a response
});

//      '/random' => means localhost:3000/random
//       ^
//       |    callback function as 2nd argument
app.get('/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * theData.length);
  const dataToBeSent = {
    randomStudent: theData[randomIndex]
  };
  //   console.log(dataToBeSent);
  //                                    dataToBeSent: dataToBeSent
  //   res.render('hbs-files/random-student', { dataToBeSent }); ==> if we would keep these {} around, we are actually nesting object inside object
  //                                                                |-> dataToBeSent is already an object so having these curly braces around actually means nesting
  //                                                                |-> then in hsb we would have to say {{ dataToBeSent.randomStudent.firstName }}
  res.render('hbs-files/random-student', dataToBeSent);
});

///////////////////////////////////////////////////////////////////////////////
// ****************************** HTML ROUTES *********************************
///////////////////////////////////////////////////////////////////////////////

//      '/' => means localhost:3000
//       ^
//       |    callback function as 2nd argument
app.get('/', (req, res) => {
  //   console.log(res);
  // ******** we can use res.send() to send one string to html file ************
  //   res.send(`Welcome to the backend!`);
  // ***************************************************************************

  // ******** we can send whole HTML as string template (really doesn't make sense right? 🤬) ******
  //   res.send(`
  // <html lang="en">
  // <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //     <title>Document</title>
  // </head>
  // <body>
  //     <h2>Welcomeeeeeee!</h2>
  // </body>
  // </html>
  // `);

  // ******* we can send a legit file which makes the most sense ✅ ********
  res.sendFile(__dirname + '/views/htmls/index.html');
});

//      '/about' => means localhost:3000/about
//       ^
//       |    callback function as 2nd argument
app.get('/about', (req, res) =>
  res.sendFile(__dirname + '/views/htmls/about.html')
);

app.listen(process.env.PORT, () =>
  console.log(`Running on port: ${process.env.PORT}`)
);
