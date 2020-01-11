const usersArray = [
  {
    firstName: 'Kirby',
    lastName: 'Doyle',
    id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
    isActive: false,
    balance: '$3,570.06',
    gender: 'male'
  },
  {
    firstName: 'Tracie',
    lastName: 'May',
    id: '1af0e9ee-66fc-4298-b8ce-5d99bcbaac05',
    isActive: false,
    balance: '$1,547.73',
    gender: 'female'
  },
  {
    firstName: 'Kendra',
    lastName: 'Hines',
    id: '5e92af3a-b08e-4689-bdeb-3226300470e3',
    isActive: true,
    balance: '$12,383.08',
    gender: 'female'
  },
  {
    firstName: 'Kinney',
    lastName: 'Howard',
    id: '0ad2388d-83e1-4831-9cc4-e3581f8edf36',
    isActive: false,
    balance: '$3,207.06',
    gender: 'male'
  },
  {
    firstName: 'Howard',
    lastName: 'Gilmore',
    id: '0719205d-c965-44cb-a128-708cf335b26c',
    isActive: true,
    balance: '$21,307.75',
    gender: 'male'
  },
  {
    firstName: 'Rachelle',
    lastName: 'Schneider',
    id: '04012184-651b-41eb-9642-d362fedff02f',
    isActive: true,
    balance: '$35,121.49',
    gender: 'female'
  },
  {
    firstName: 'Lizzie',
    lastName: 'Alford',
    id: '598ca7ec-888e-494d-ae94-c21ace3ffa52',
    isActive: false,
    balance: '$4,382.94',
    gender: 'female'
  }
];

const usersArray = [
  {
    firstName: 'Kirby',
    lastName: 'Doyle',
    id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
    isActive: false,
    balance: '$3,570.06',
    gender: 'male'
  },
  {
    firstName: 'Tracie',
    lastName: 'May',
    id: '1af0e9ee-66fc-4298-b8ce-5d99bcbaac05',
    isActive: false,
    balance: '$1,547.73',
    gender: 'female'
  },
  {
    firstName: 'Kendra',
    lastName: 'Hines',
    id: '5e92af3a-b08e-4689-bdeb-3226300470e3',
    isActive: true,
    balance: '$12,383.08',
    gender: 'female'
  },
  {
    firstName: 'Kinney',
    lastName: 'Howard',
    id: '0ad2388d-83e1-4831-9cc4-e3581f8edf36',
    isActive: false,
    balance: '$3,207.06',
    gender: 'male'
  },
  {
    firstName: 'Howard',
    lastName: 'Gilmore',
    id: '0719205d-c965-44cb-a128-708cf335b26c',
    isActive: true,
    balance: '$21,307.75',
    gender: 'male'
  },
  {
    firstName: 'Rachelle',
    lastName: 'Schneider',
    id: '04012184-651b-41eb-9642-d362fedff02f',
    isActive: true,
    balance: '$35,121.49',
    gender: 'female'
  },
  {
    firstName: 'Lizzie',
    lastName: 'Alford',
    id: '598ca7ec-888e-494d-ae94-c21ace3ffa52',
    isActive: false,
    balance: '$4,382.94',
    gender: 'female'
  }
];

// *******************************************************************************************
// TASK 1 - `for...of` loop and ES6 string literals `${}`
// Using `for...of` loop iterate over the usersArray and
// 1. using ES 6 string interpolation create a string containing full name
// 2. push that string into a new array `userNames`

const userNames = [];
for (let user of usersArray) {
  userNames.push(`${user.firstName} ${user.lastName}`);
  // or:
  // let fullName= `${user.firstName} ${user.lastName}`;
  // userNames.push(fullName);
}

// console.log('userNames', userNames);

// *******************************************************************************************
//  TASK 2 - for of loop

// Using `for...of` loop iterate over the `usersArray`
// 1. push all first names into a new array `userFirstNames`
const userFirstNames = [];
for (let user of usersArray) {
  userFirstNames.push(user.firstName);

  // or:
  // const { firstName } = user;
  // userFirstNames.push(firstName)
}

// console.log('userFirstNames', userFirstNames);

// *******************************************************************************************
//  TASK 3 - for of loop

// Using `for...of` loop iterate over the `usersArray`
// 1. push all of the last names into a new array `userLastNames
const userLastNames = [];
for (let user of usersArray) {
  userLastNames.push(user.lastName);
}
// console.log('userLastNames', userLastNames);

// *******************************************************************************************
//  TASK 4 - ES6 destructuring , for of loop, object literal (variable name as a property name and value)

// Using `for...of` loop iterate over the `usersArray`
// 1. destructure `firstName`, `lastName` and `balance` from each user
// 2. After destructuring create a new object using object literal (only name of variable) consisting of `firstName`, `lastName` and `balance` and
// 3. push each new object into a new array `userCreditDetails`

//destructuring
const userCreditDetails = [];

for (const user of usersArray) {
  let { firstName, lastName, balance } = user;
  userCreditDetails.push({ firstName, lastName, balance });
  // or:
  // const data = { firstName, lastName, balance };
  // userCreditDetails.push(data);
}

// *******************************************************************************************
// SIDE NOTE: HOW WE CAN NAME PROPERTIES OF A NEWLY CREATED OBJECT

const userCreditDetails = [];
for (let user of usersArray) {
  const { firstName, lastName, balance } = user;
  // 1ST WAY:
  const newUser1 = {
    firstName,
    lastName, // lastName: lastName,
    balance // balance:balance
  };

  const newObj2 = {
    // name is the new property; firstName comes from the object destructuring (const { firstName, lastName, balance } = user;) and it represents the value we attach to name
    name: firstName,
    familyName: lastName, // the same as above
    accountBalance: balance // the same as above
  };
  // userCreditDetails.push(newObj)

  //   userCreditDetails.push({ firstName, lastName, balance });
}
