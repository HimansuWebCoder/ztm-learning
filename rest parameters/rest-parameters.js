function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10

function add(...argue) {
  let total = 0;
  for (const arg of argue) {
    total += arg;
  }
  return total;
}

console.log(add(1, 2, 3, 4));

function array(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
}

array("a", "b", "c", "D", "e");
