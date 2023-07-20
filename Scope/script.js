// scope

// var b = "Can I access this?";

// function bb() {
//   var a = "hello";
// }

// var b = "Can I access this?";

// function bb() {
//   b = "hello";
// }

// Root Scope (window)
// var fun = 5;

// function funFunction() {
  // Child Scope
//   var fun = "helloooo";
//   console.log(1, fun);
// }

// function funerFunction() {
  // Child Scope
//   fun = "Byeee";
//   console.log(2, fun);
// }

// function funestFunction() {
  // Child Scope
//   fun = "AHHHHH";
//   console.log(3, fun);
// }

// console.log("Window", fun);
// funFunction();
// funerFunction();
// funestFunction();

// var fun = 5;

function funestFunction() {
  // child Scope
  console.log(fun);
}
