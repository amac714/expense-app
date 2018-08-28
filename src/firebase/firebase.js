import * as firebase from 'firebase';


const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// subscription to expenses
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnap) => {
//     expenses.push({
//       id: childSnap.key,
//       ...childSnap.val()
//     });
//   });

//   console.log(expenses);
// });


//reading from firebase
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Phone bill',
//   amount: 14500,
//   note: '',
//   createdAt: 40000
// });



// database.ref('notes/-LKlzYd4p-zATR65y-VE').remove();


//push automatically assigns a randomly generated ID
// database.ref('notes').push({
//   title: 'Course notes',
//   body: 'Go for a shower'
// });

//firebase doesnt handle arrays
//how to handle data in firebase
// const firebaseNotes = {
//   notes: {
//     adejaoij:{
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     dasda: {
//       title: 'another note',
//       body: 'this is my note'
//     }
//   }
// };

//fetching data once
// database.ref().once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });



// database.ref().set({
//   name: 'Alan Macabuhay',
//   age: 29,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: "Huntington Beach",
//     country: "United States"
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seatle'
// }).then(() => {
//   console.log('Update successfull');
// }).catch((e) => {
//   console.log('error', e);
// });

// database.ref('isSingle').set(null); //equivalent to remove()

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('Remove success');
//   }).catch((e) => {
//     console.log('Error', e);
//   });