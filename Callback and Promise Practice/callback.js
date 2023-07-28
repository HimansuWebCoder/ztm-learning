// el.addEventListener("click", submitForm);

//? callback pyramid of doom
// movePlayer(100, "Left", function () {
//   movePlayer(400, "Left", function () {
//     movePlayer(10, "Right", function () {
//       movePlayer(330, "Left", function () {});
//     });
//   });
// });

//

// rabbit("Bhubaneswar", function () {
//   rabbit("Odisha", function () {
//     rabbit("India", function () {
//       rabbit("America", function () {});
//     });
//   });
// });

//

// Direction("Left", function () {
//   Direction("Right", function () {});
// });

//

// player(100, function () {
//   player(200, function () {
//     player(300, function () {
//       player(400, function () {
//         player(500, function () {
//           player(600, function () {
//             player(700, function () {
//               player(800, function () {
//                 player(900, function () {
//                   player(1000, function () {});   // Ohhh! PYRAMID DOOM!!!!
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

//? Above Callback look like this in Promise

// movePlayer(100, "Left")
//   .then(() => movePlayer(400, "Left"))
//   .then(() => movePlayer(10, "Right"))
//   .then(() => movePlayer(330, "Left"));

// 

// rabbit("Bhubaneswar")
//   .then(() => rabbit("Odisha"))
//   .then(() => rabbit("India"))
//   .then(() => rabbit("America"))

//

// Direction("Left")
//   .then(() => Direction("Right"))

//

// player(100)
//   .then(() => player(200))
//   .then(() => player(300))
//   .then(() => player(400))
//   .then(() => player(500))
//   .then(() => player(600))
//   .then(() => player(700))
//   .then(() => player(800))
//   .then(() => player(900))
//   .then(() => player(1000))

//? grabTweets("twitter/andreineagoie", (error, andreiTweets) => {
//   if (error) {
//     throw Error;
//   }
//   displayTweets(andreiTweets);
//   grabTweets("twitter/elonmusk", (error, elonTweets) => {
//     if (error) {
//       throw Error;
//     }
//     displayTweets(elonTweets);
//     grabTweets("twitter/vitalikbuterin", (error, vitalikTweets) => {
//       if (error) {
//         throw Error;
//       }
//       displayTweets(vitalikTweets);
//     });
//   });
// });

// callback pyramid doom
// moveRabbit(100, "left", function () {
//   moveRabbit(400, "left", function () {
//     moveRabbit(10, "right", function () {
//       moveRabbit(220, "left", function () {});
//     });
//   });
// });

// using promise
// moveRabbit(100, "left")
//   .then(() => moveRabbit(400, "left"))
//   .then(() => moveRabbit(10, "right"))
//   .then(() => moveRabbit(220, "left"));

//? Callabck Example1
// message("himansu", (err, himansuMessage) => {
//   if (err) {
//     throw Error;
//   }
//   displayMsg(himansuMessage);
//   message("rinky", (err, rinkyMessage) => {
//     if (err) {
//       throw Error;
//     }
//     displayMsg(rinkyMessage);
//     message("sipu", (err, sipuMessage) => {
//       if (err) {
//         throw Error;
//       }
//       displayMsg(sipuMessage);
//     });
//   });
// });

//? Example2
// tweet("Himansu", (fail, Himansutweet) => {
//   if (fail) {
//     console.log("Tweet failed");
//   }
//   tweetMsg(Himansutweet);
//   tweet("Rinky", (fail, Rinkytweet) => {
//     if (fail) {
//       console.log("Tweet failed");
//     }
//     tweetMsg(Rinkytweet);
//     tweet("Sipu", (fail, Siputweet) => {
//       if (fail) {
//         console.log("Tweet failed");
//       }
//       tweetMsg(Siputweet);
//     });
//   });
// });

//? Example3 

// parrot("Guava", (notEat, Eat) => {
//   notEat("I don't eat Guava");
//   eating(Eat);
//    Crow("Apple", (notEat, Eat) => {
//     notEat("I don't eat Apple");
//     eating(Eat);
//      Eagle("snake", (notEat, Eat) => {
//       notEat("I don't eat Snake");
//       eating(Eat);
//      })
//    })
// })

// function play(x, callback) {
//   result = x + 1;
//   callback(result);
// }

// function play2(x, callback) {
//   result = x + 1;
//   callback(result);
// }

// function allPlay() {
//   play("Himansu", (result1) => {
//     console.log(`${result1}`);
//     play2("rinky", (result2) => {
//       console.log(`${result1} & ${result2}`);
//     });
//   });
// }

// console.log(allPlay());

// in Promise
// play("Himansu", (result1) => {
//   console.log(result1);
// }).then("rinky", (result2) => {
//   console.log(result2);
// });
