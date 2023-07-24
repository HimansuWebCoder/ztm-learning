// el.addEventListener("click", submitForm);

// callback pyramid of doom
// movePlayer(100, "Left", function () {
//   movePlayer(400, "Left", function () {
//     movePlayer(10, "Right", function () {
//       movePlayer(330, "Left", function () {});
//     });
//   });
// });

// Above Callback look like this in Promise

// movePlayer(100, "Left")
//   .then(() => movePlayer(400, "Left"))
//   .then(() => movePlayer(10, "Right"))
//   .then(() => movePlayer(330, "Left"));

// grabTweets("twitter/andreineagoie", (error, andreiTweets) => {
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
