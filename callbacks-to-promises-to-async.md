# Callbacks to promises (and dash of async-await)

Let's write a function whose execution time will depend on some external influence - in this case the `setTimeout()` method:

```javascript
function printString(str) {
  setTimeout(() => {
    console.log(str);
  }, Math.floor(Math.random() * 100));
}
```

If we would call this function multiple times, each time we would get different results, no matter that we are calling them in the same order each time. This replicates asynchronous nature of any HTTP call or any other situation, when we really don't know hos much time it will take for each piece of code to execute:

```javascript
function printAll() {
  printString('A');
  printString('B');
  printString('C');
}
printAll();
```

If you execute the above code, you will notice that A, B, and C print in a different and random order each time you call printAll()!

This is because these functions are asynchronous. Each function gets executed in order, but each one is independent with its own setTimeout(). They won’t wait for the last function to finish before they start.

## CALLBACKS

A callback is a function that is passed to another function. When the first function is done, it will run the second function.

```javascript
function printStringWithCallbacks(str, callback) {
  setTimeout(() => {
    console.log(str);
    callback();
  }, Math.floor(Math.random() * 100));
}

function printAllWithCallbacks() {
  printStringWithCallbacks('A', () => {
    printStringWithCallbacks('B', () => {
      printStringWithCallbacks('C', () => {
        console.log('hello');
      });
    });
  });
}

printAllWithCallbacks();
```

Problem with callbacks: it creates something called “Callback Hell.”
Solution: Promises - here to fix this nesting problem.

## PROMISES

```javascript
function printStringWithPromises(str) {
  return new Promise((resolve, reject) => {
    if (str) {
      setTimeout(() => {
        console.log(str);
        resolve();
      }, Math.floor(Math.random() * 100));
    } else {
      const err = new Error('String is never passed in!');
      reject(err);
    }
  });
}
```

```javascript
function printAllWithPromises() {
  printStringWithPromises('A')
    .then(() => printStringWithPromises('B'))
    .then(() => printStringWithPromises('C'))
    .catch(err => console.log(`Error happened: ${err.message}`));
}
printAllWithPromises();
```

## ASYNC/AWAIT

Await is basically syntactic sugar for Promises. It makes your asynchronous code look more like synchronous/procedural code, which is easier for humans to understand.

The `printStringWithPromises()` function doesn’t change at all from the promise version.

```javascript
async function printAllWithAsync() {
  await printStringWithPromises('A');
  await printStringWithPromises('B');
  await printStringWithPromises('C');
}

printAllWithAsync();
```
