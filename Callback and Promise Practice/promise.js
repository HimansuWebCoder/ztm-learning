// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("Stuff Worked");
//   } else {
//     reject("Error, it broke");
//   }
// });

// promise.then(result => console.log(result));

// promise
//   .then((result) => result + "!")
//   .then((result2) => {
// 	throw Error
//     console.log(result2);
//   })
//   .catch(() => console.log("error!"));

// promise
//   .then(result => {
//     throw Error;
//     return result + "!";
//   })
//   .then((result2) => {
//     console.log(result2);
//   })
//   .catch(() => console.log("error!"));

// promise
//   .then((result) => result + "!")
//   .then((result2) => result2 + "?")
//   .catch(() => console.log("error!"))
//   .then((result3) => {
//     console.log(result3 + "!");
//   });

// promise
//   .then((result) => result + "!")
//   .then((result2) => result2 + "?")
//   .catch(() => console.log("error!"))
//   .then((result3) => {
//     throw Error;
//     console.log(result3 + "!");
//   });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "HIII");
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "POOKIE");
// });
// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "Is is me you are looking for?");
// });

// Promise.all([promise, promise2, promise3, promise4]).then((values) => {
//   console.log(values);
// });

// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];

// In this case the promise "rejects": Promise {<rejected>:TypeError: Failed to fetch}, see below
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("error"));


  
// const promiseA = new Promise((resolve, reject) => {
//   resolve(777);
// });

// promiseA.then((val) => console.log("asynchronous logging has val:", val));
// console.log("immediate logging");

// const promiseB = new Promise((resolve, reject) => {
//   return resolve(45 + 45);
// });



// promiseB.then((val) => console.log("Asynchronous Js", val));
// console.log("Successfully done");

// const promiseC = new Promise((resolve, reject) => {
//   return resolve("Hello I am promise");
// });

// promiseC.then((val) => {
//   console.log("All work done", val);
// });
// console.log("Work successfully work done");

// const fruitA = new Promise((solve, fail) => {
//   return solve("How to solve logic in js");
// });

// fruitA.then((val) => {
//   console.log("MY work success", val);
// });
// console.log("work success");


// const promiseGreet = new Promise((success, fail) => {
//   return success("I want to work in Infosys Company");
// });

// promiseGreet.then((err) => {
//   console.log("Result:", err);
// });


// function himansu(yes, no) {
//   return yes(prompt("What do you love?")); 
// }


