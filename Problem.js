const sum = function (a, b) {
  if (a === b) {
    console.log(`it is square and area is: ${a * a}`);
  } else {
    console.log(`it is rectangle and area is :${a * b}`);
  }
};
sum(7, 8);
sum(7, 7);
