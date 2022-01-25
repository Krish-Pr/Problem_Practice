// console.log("hello");

// let promise = new Promise(function (resolve, reject) {
//   let mytest = () => resolve("done!");
//   setTimeout(mytest, 5000);
// });

// // resolve runs the first function in .then
// promise.then(
//   (result) => alert(result), // shows "done!" after 1 second
//   (error) => alert(error) // doesn't run
// );

var promise = new Promise(function (myresolve, reject) {
  const x = "geeksforgeeks";
  const y = "geeksforgeeks";
  if (x === y) {
    myresolve();
  } else {
    reject();
  }
})
  .then(function () {
    console.log("Success, You are a GEEK");
  })
  .catch(function () {
    console.log("Some error has occurred");
  });
