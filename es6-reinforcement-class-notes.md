# ES6 basics and a bit more

Concepts we will cover are related to variable:

- scope,
- updating,
- redeclaring and
- hoisting.

## var vs let and const

### Scope

**Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime.**

- What **kinds of scopes** are there in JS?

  We can talk about:

  - _global_,
  - _local or functional_ and
  - _block scope_.

- Why is **scope so important**?

  Most importantly, because of **security** - we are making sure that variables are accessible only from a certain areas of the program. _Why is this important?_ Limiting the accessibility of variables avoiding unintended modifications to the variables from other parts of the program.

  Scope helps in reducing the issue with variable namings. Thanks to scope, we can use the same variable names in different scopes.

#### Global and local/functional scope

**With keyword "var", variables are being declared in GLOBAL OR FUNCTIONAL/LOCAL SCOPE.**

If variable is declared outside of a function, it belongs to the global scope and can be accessed (used) in the whole window.

If we declare a variable inside the function, then the variable belongs to the functional or local scope.

```javascript
// example of a global variable:
var global = 'Hello from the global scope!';

// example of a local or functional variable:
function sayHelloFromLocalScope() {
  var local = 'Hello from functional/local scope!';
  return local;
}

// console.log(global); // <== Hello from the global scope!
// console.log(local); // <== ReferenceError: local is not defined
```

If the same named variable belongs to different scopes, it is considered as autonomous and the second doesn't overwrite the first one.

```javascript
var name = 'ana';

function sayMyName() {
  var name = 'maria';
  console.log(`my name is: ${name}`);
}

console.log(name); // ana
sayMyName(); // my name is: maria
```

In this case, there's no difference between _var_ and _let_.

```javascript
let name = 'ana';

function sayMyName() {
  let name = 'maria';
  console.log(`my name is: ${name}`);
}

console.log(name); // ana
sayMyName(); // my name is: maria
```

As the name says, local or functional scope exists between the curly braces of any function. However, this doesn't apply to all _"curly" braces_ since "if" statements and "for" loops don’t have their scope.

```javascript
for (var i = 1; i <= 4; i++) {
  console.log(`Iterations inside the loop: ${i}`);
}

console.log(`After the loop: ${i}`);

// Iterations inside the loop: 1
// Iterations inside the loop: 2
// Iterations inside the loop: 3
// Iterations inside the loop: 4
// After the loop: 5
```

The same rule doesn't apply when we use _"let"_. Let's see.

#### Block scope

**BLOCK is any code between open and closed curly braces "{}".**

If variable is declared between _"{}"_, it can be only used there (blocks include if statements, loops and functions).

This being said, unlike when using "var", when using let and const, _"if"_ and _"for"_ loop have their own scope:

```javascript
for (let i = 1; i <= 4; i++) {
  console.log(`Iterations inside the loop: ${i}`);
}

console.log(`After the loop: ${i}`);

// Iterations inside the loop: 1
// Iterations inside the loop: 2
// Iterations inside the loop: 3
// Iterations inside the loop: 4
// ReferenceError: i is not defined
```

### Redeclaring and updating

1. **var** - variables declared with _"var"_ can be redeclared and updated;
2. **let** - variables declared with _"let"_ can't be redeclared and can be updated.

```javascript
// with var - can be redeclared
// (we can have two variables with the same name in the same scope):
var price = 100;
var price = '99';
console.log(price); // 99

// with let - can't be redeclared:
let price = 100;
let price = '99'; // Identifier 'price' has already been declared
```

However, if the same variables belong to different scopes, no error will be shown because they are treated as different variables which belong to different scopes.

With both, _var_ and _let_, variables can be updated:

```javascript
var priceWtax = 555.99;
priceWtax = 89;

console.log(`price with tax is: ${priceWtax}`); // price with tax is: 89

let priceWithoutTax = 5.99;
priceWithoutTax = 9;

console.log(`price without tax is: ${priceWithoutTax}`); // price without tax is: 9
```

_IS THIS ALWAYS GOOD?_

```javascript
// using var:

var ironhacker = 'humberto';
console.log(`Before: ${ironhacker}`);
if (true) {
  var ironhacker = 'ashraf';
  console.log(`Inside: ${ironhacker}`);
}
console.log(`After: ${ironhacker}`);
// Before: humberto
// Inside: ashraf
// After: ashraf ☝☝☝
```

```javascript
// using let:

let ironhacker = 'humberto';
console.log(`Before: ${ironhacker}`);
if (true) {
  let ironhacker = 'ashraf';
  console.log(`Inside: ${ironhacker}`);
}
console.log(`After: ${ironhacker}`);
// Before: humberto
// Inside: ashraf
// After: humberto 👏🏻👏🏻👏🏻
```

It is so easy to redeclare variables declared with "var". If we have declared variable somewhere before, it means we just "messed up" our code.
That’s why let and const are here to prevent this.

To recap and compare: _let_ gives us much more security because when variables are declared with _let_, if declared in different scopes, are two different variables while using _var_ the second one will redeclare the first one. At the same time, _let_ doesn’t allow having the same named variables in the same scope while, as we saw, with _var_ that is possible to happen and no error will be thrown.

**Using "const" variables CAN'T BE RE-DECLARED NOR UPDATED.**

Variables declared with const have to be initialized in the moment of declaration. This will throw an error:

```javascript
const name = "John"; // <== CORRECT

const name; // <== WRONG!
name = "John"; // <== this doesn't work
```

_CONST AND OBJECTS AND ARRAYS_

Objects and arrays declared using _"const"_ can be updated, meaning we can update the existing properties.

Using the _"const"_ keyword, means new properties and values can be added BUT the value of the object itself is fixed to the same reference (address) in the memory and the object (or any variable declared with const) can’t be reassigned.

```javascript
// This is ok ✅
const obj = {};
obj.name = 'Ironhacker';

// This is not 🚨
obj = { name: 'Ironhacker' };
// SyntaxError: Assignment to constant variable
```

### Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

Before examples, let's see how this process happens. When your code gets into execution, there are a couple of processes going on:

1. process of compilation - this is when your code gets translated into machine understandable language so machine (your computer) can process it. This language is bunch of 0s and 1s.

2. lexical environment - during compile phase, just microseconds before your code is executed, it is scanned for function and variable declarations. All these functions and variable declarations are added to the memory inside a JavaScript data structure called Lexical Environment. So that they can be used even before they are actually declared in the source code.

A lexical environment is a data structure that holds `identifier-variable` mapping.

It is object that holds variable/function name as properties and value is reference to actual object or primitive value.
Imagine lexical environment as object:

```javascript
LexEnv = {
  // Identifier:  <value>,
  name: value,
  // Identifier:  <function object>
  sayMyName: function
}
```

When JavaScript engine finds a _"var"_ variable declaration during the compile phase, it will add that variable to the lexical environment and initialize it with _undefined_ and later during the execution when it reaches the line where the actual assignment is done in the code, it will assign that value to the variable.
So the initial lexical environment for the above code will look something like this:

```javascript
LexEnv = {
  name: undefined
};
```

And when the engine reaches the line (during execution) where the actual assignment is done, it will update the value of the variable in its lexical environment. So the lexical environment after the assignment will look like this:

```javascript
lexicalEnvironment = {
  name: 'maria'
};
```

So in short, a _lexical environment_ is a place where variables and functions live during the program execution.

Let's now see how variables declared with _"var"_ and _"let"_ behave in hoisting:

- **var and hoisting**
  Variables declared using _var_ are moved to the top of its scope (we say - hoisted) and initialized with a value of undefined. Let's see what this means.

```javascript
console.log(`students name is: ${studentName}`); // students name is: undefined
var studentName = 'joana';
```

To visualize, we can imagine this is happening:

```javascript
var studentName;
console.log(`students name is: ${studentName}`); // students name is: undefined
studentName = 'joana';
```

- **let and hoisting**
  Variables declared with _let_ are hoisted to the top as well but they are not initialized. **So using _var_ we would get the value of undefined but using _let_ we get a Reference Error.**

_VARIABLES declared with let and const hoist but you can not access them before the actual declaration is evaluated at runtime._

```javascript
console.log(`studentLastName is: ${studentLastName}`); // ReferenceError: studentLastName is not defined
let studentLastName = 'xyz';
```

- **Function declaration gets hoisted.**

```javascript
sayHello(); // Hello there!
function sayHello() {
  console.log('Hello there!');
}
```

- **Function expression doesn't get hoisted.**

```javascript
greeting(); // ReferenceError: greeting is not defined
const greeting = function() {
  console.log('Hi!');
};
```

Even if we use _var_ it won't work since the engine will assign it undefined value during hoisting.

_Remember JavaScript only hoist declarations, not initializations. That is, during compile time, JavaScript only stores function and variable declarations in the memory, not their assignments (value)._

Why do we get value of undefined with var but we get Reference Error with let?

_All declarations (function, var, let, const and class) are hoisted in JavaScript, while the var declarations are initialized with undefined, but let and const declarations remain uninitialized._

They will only get initialized when their lexical binding (assignment) is evaluated during runtime by the JavaScript engine. This means you can’t access the variable before the engine evaluates its value at the place it was declared in the source code. This is what we call “Temporal Dead Zone”, A time span between variable creation and its initialization where they can’t be accessed.

- **Class declaration doesn't get hoisted.**

Just as _let_ and _const_ declarations, classes in JavaScript are also hoisted, and just as _let_ or _const_ declarations, they remain uninitialized until evaluation. So they are also affected by the “Temporal Dead Zone”.

```javascript
const gamer1 = new Gamer(); // ReferenceError: Gamer is not defined

class Gamer {}
```

### Summary

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_6b2d9ee1f8d0c762424b0f120cb402a2.png)

## ES6 features: destructuring

- Applied on objects:

```javascript
const ironStudent = {
  firstName: 'michel',
  lastName: 'maia',
  course: {
    courseType: 'web dev',
    bootcamp: 'PT',
    startDate: '10/2019',
    endDate: '05/2020',
    careerChanger: true
  }
};
```

How we would get the values into variables?

```javascript
// old way - so tedious and repetitive: 👎
//
// const firstName = ironStudent.firstName;
// const lastName = ironStudent.lastName;
// const courseType = ironStudent.course.courseType;
// const bootcamp = ironStudent.course.bootcamp;
// const startDate = ironStudent.course.startDate;
// const endDate = ironStudent.course.endDate;
// const careerChanger = ironStudent.course.careerChanger;
```

**What we’re doing is creating variables using the same names as the properties of our object.**

```javascript
const {
  firstName,
  lastName,
  course: { courseType, startDate, endDate, careerChanger }
} = ironStudent;

console.log(`Full name: ${firstName} ${lastName}.`);
console.log(`Bootcamp: ${bootcamp}.`);
console.log(`Start date: ${startDate}.`);
```

One more example of how we can use destructuring:

```javascript
const book = {
  title: 'Pride and Prejudice',
  writer: 'Jane Austin',
  publishYear: 1654
};

function getBookInfo({ title, writer, publishYear }) {
  console.log(`Book ${title} is written by ${writer} in ${publishYear}.`);
}

getBookInfo(book); // Book Pride and Prejudice is written by Jane Austin in 1654.
```

The same example but on the array of objects:

```javascript
const products = [
  {
    prodName: 'TV',
    price: 1200
  },
  {
    prodName: 'x-box',
    price: 500
  },
  {
    prodName: 'iPhone',
    price: 900
  }
];

function listProducts(arr) {
  arr.forEach(elem => {
    const { prodName, price } = elem;
    console.log(`${prodName} -> ${price}`);
  });
}

listProducts(products);
// TV -> 1200
// x-box -> 500
// iPhone -> 900
```

- Applied on arrays:

```javascript
// old fashioned:
const television = products[0];

// being fancy:
const [tele, xbox, phone] = products;

console.log(tele, xbox, phone);

// want to get just the second element of the array:
const [, gameConsole] = products;
console.log(gameConsole); // { prodName: 'x-box', price: 500 }

// want to get the second and the third element of the array:
const [, theConsole, thePhone] = products;
console.log(theConsole, thePhone);
// { prodName: 'x-box', price: 500 } { prodName: 'iPhone', price: 900 }
```

Example 2:

```javascript
const ironhackers = ['arthur', 'kevin', 'vero', 'kayla'];
const [uxer, ...developers] = ironhackers;

console.log(uxer, developers);
// arthur [ 'kevin', 'vero', 'kayla' ]
```

Example 3:

```javascript
const players = ['messi', 'ronaldo', 'drogba'];
const [captain, ...team] = players;

console.log(captain, team); // messi [ 'ronaldo', 'drogba' ]
```

## ES6 features: spread and rest operators

What are the _"..."_?

What is diff between spread and rest operator?

### Spread operator

**Applies to arrays and objects.**

- Merge arrays:

```javascript
const uxers = ['ana', 'arthur'];
const devs = ['michaela', 'evgeny'];

const miaOctCohorts = [...uxers, ...devs];
console.log(miaOctCohorts); // [ 'ana', 'arthur', 'michaela', 'evgeny' ]
```

- Modify objects:

Assume you have the following object:

```javascript
const dev1 = {
  name: 'vero',
  occupation: 'dev',
  age: 30
};
```

Let’s assume you want to create a new object(_dev2_) with a different name and age, but the same occupation.

```javascript
const dev2 = {
  ...dev1,
  name: 'kevin',
  age: 32
};
console.log(dev1);
// { name: 'vero', occupation: 'dev', age: 30 }
console.log(dev2);
// { name: 'kevin', occupation: 'dev', age: 32 }
```

### Rest operator

```javascript
function calcSum(...someElements) {
  console.log(arguments);

  //     let sum = 0;
  //     for(let i=0; i<arguments.length; i++){
  //         sum += arguments[i]
  //     }

  //     return sum;

  return someElements.reduce((a, b) => a + b); // error (we should use rest operator (the same as spread (...)))
}

calcSum(2, 4); // 6
calcSum(2, 44, 66); // 112
calcSum(11, 23, 77, 12); // 123
```

```javascript
// create object:
const hello = {};
const hello1 = new Object(); // Object is JS built in class

const price3 = '98';
console.log(Number(price3)); // Number is JS built in class

// ☝🏻☝🏻☝🏻 functions are objects
// create a function:
// function name(){
//   // some
// }

// also create a function:
const nameBlah = new Function();

// proof that functions are objects - dot notation:
nameBlah.someProp = 'helllooooo';

console.log(nameBlah.someProp); // helllooooo

console.log(Object(nameBlah) === nameBlah); // true
// console.log(typeof nameBlah)
```
