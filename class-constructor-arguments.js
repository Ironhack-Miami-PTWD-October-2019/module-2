class Student {
  constructor() {
    this.name = undefined;
    this.age = undefined;
  }
}

const stanley = new Student();
console.log(stanley);
// Student { name: undefined, age: undefined }

class Product {
  constructor(theName, thePrice) {
    this.name = theName;
    this.price = thePrice;
  }
}

const tv = new Product('television', 299);
console.log(tv);
// Product { name: 'television', price: 299 }
