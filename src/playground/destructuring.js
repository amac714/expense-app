
//
// OBJECT DESTRUCTURING
//

// const person ={
//   name: 'Alan',
//   age: 29,
//   location: {
//     city: 'HB',
//     temp: 100
//   }
// };

// // object descructuring syntax es6
// // setting a default value
// const { name = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}`);

// // renaming temp variable syntax 
// const { city, temp: temperature } = person.location;

// if(city && temperature)
//   console.log(`its ${temperature} in ${city}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName); //penguin, self-published

////////////////////////////////////////////////////////////////////////
//
// ARRAY DESTRUCTURING
//

const address = ['1299 Woodruff St', 'HB', 'California', '92683'];


//ordered list of variable names, no rename syntax for ARRAY destructuring, can set default
const [ , city, state = 'New York' ] = address;

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (Iced)', '$2.00', '$3.50', '$2.75'];

const [ coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);
