// var keepsHisWord;
// keepsHisWord = true;
// promise1 = new Promise(function(resolve, reject) {
//   if (keepsHisWord) {
//     resolve("The man likes to keep his word");
//   } else {
//     reject("The man doesnt want to keep his word");
//   }
// });
// console.log(promise1);

// promise2 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve({
//       message: "The man likes to keep his word",
//       code: "aManKeepsHisWord"
//     });
//   }, 10 * 1000);
// });
// console.log(promise2);

// keepsHisWord = false;
// promise3 = new Promise(function(resolve, reject) {
//   if (keepsHisWord) {
//     resolve("The man likes to keep his word");
//   } else {
//     reject("The man doesn't want to keep his word");
//   }
// });
// console.log(promise3);

// var momsPromise = new Promise(function(resolve, reject) {
//   momsSavings = 20000;
//   priceOfPhone = 60000;
//   if (momsSavings > priceOfPhone) {
//     resolve({
//       brand: "iphone",
//       model: "6s"
//     });
//   } else {
//     reject("We donot have enough savings. Let us save some more money.");
//   }
// });
// momsPromise.then(function(value) {
//   console.log("Hurray I got this phone as a gift ", JSON.stringify(value));
// });
// momsPromise.catch(function(reason) {
//   console.log("Mom coudn't buy me the phone because ", reason);
// });
// momsPromise.finally(function() {
//   console.log(
//     "Irrespecitve of whether my mom can buy me a phone or not, I still love her"
//   );
// });

// momsPromise.then(
//   function(value) {
//     console.log("Hurray I got this phone as a gift ", JSON.stringify(value));
//   },
//   function(reason) {
//     console.log("Mom coudn't buy me the phone because ", reason);
//   }
// );

// function getRandomNumber(start = 1, end = 10) {
//   //works when both start,end are >=1 and end > start
//   return parseInt(Math.random() * end) % (end-start+1) + start;
// }

// function getRandomNumber(start = 1, end = 10) {
//   //works when both start and end are >=1
//   return (parseInt(Math.random() * end) % (end - start + 1)) + start;
// }
// var promiseTRRARNOSG = (promiseThatResolvesRandomlyAfterRandomNumnberOfSecondsGenerator = function() {
//   return new Promise(function(resolve, reject) {
//     let randomNumberOfSeconds = getRandomNumber(2, 10);
//     setTimeout(function() {
//       let randomiseResolving = getRandomNumber(1, 10);
//       if (randomiseResolving > 5) {
//         resolve({
//           randomNumberOfSeconds: randomNumberOfSeconds,
//           randomiseResolving: randomiseResolving
//         });
//       } else {
//         reject({
//           randomNumberOfSeconds: randomNumberOfSeconds,
//           randomiseResolving: randomiseResolving
//         });
//       }
//     }, randomNumberOfSeconds * 1000);
//   });
// });
// var testProimse = promiseTRRARNOSG();
// testProimse.then(function(value) {
//   console.log("Value when promise is resolved : ", value);
// });
// testProimse.catch(function(reason) {
//   console.log("Reason when promise is rejected : ", reason);
// });
// // Let us loop through and create ten different promises using the function to see some variation. Some will be resolved and some will be rejected. 
// for (i=1; i<=10; i++) {
//   let promise = promiseTRRARNOSG();
//   promise.then(function(value) {
//     console.log("Value when promise is resolved : ", value);
//   });
//   promise.catch(function(reason) {
//     console.log("Reason when promise is rejected : ", reason);
//   });
// }

// var promise3 = Promise.reject("Not interested");
// promise3.then(function(value){
//   console.log("This will not run as it is a resolved promise. The resolved value is ", value);
// });
// promise3.catch(function(reason){
//   console.log("This run as it is a rejected promise. The reason is ", reason);
// });

// var promise4 = Promise.resolve(1);
// promise4.then(function(value){
//   console.log("This will run as it is a resovled promise. The resolved value is ", value);
// });
// promise4.catch(function(reason){
//   console.log("This will not run as it is a resolved promise", reason);
// });


// var promise4 = Promise.resolve(1);
// promise4.then(function(value){
//   console.log("This will run as it is a resovled promise. The resolved value is ", value);
// });
// promise4.then(function(value){
//   console.log("This will also run as multiple handlers can be added. Printing twice the resolved value which is ", value * 2);
// });
// promise4.catch(function(reason){
//   console.log("This will not run as it is a resolved promise", reason);
// });


// var promiseTRSANSG = (promiseThatResolvesAfterNSecondsGenerator = function(
//   n = 0
// ) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve({
//         resolvedAfterNSeconds: n
//       });
//     }, n * 1000);
//   });
// });
// var promiseTRJANSG = (promiseThatRejectsAfterNSecondsGenerator = function(
//   n = 0
// ) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       reject({
//         rejectedAfterNSeconds: n
//       });
//     }, n * 1000);
//   });
// });

// console.time("Promise.All");
// var promisesArray = [];
// promisesArray.push(promiseTRSANSG(1));
// promisesArray.push(promiseTRSANSG(4));
// promisesArray.push(promiseTRSANSG(2));
// var handleAllPromises = Promise.all(promisesArray);
// handleAllPromises.then(function(values) {
//   console.timeEnd("Promise.All");
//   console.log("All the promises are resolved", values);
// });
// handleAllPromises.catch(function(reason) {
//   console.log("One of the promises failed with the following reason", reason);
// });

// console.time("Promise.All");
// var promisesArray = [];
// promisesArray.push(1);
// promisesArray.push(4);
// promisesArray.push(2);
// var handleAllPromises = Promise.all(promisesArray);
// handleAllPromises.then(function(values) {
//   console.timeEnd("Promise.All");
//   console.log("All the promises are resolved", values);
// });
// handleAllPromises.catch(function(reason) {
//   console.log("One of the promises failed with the following reason", reason);
// });


// console.time("Promise.All");
// var promisesArray = [];
// promisesArray.push(promiseTRSANSG(1));
// promisesArray.push(promiseTRSANSG(5));
// promisesArray.push(promiseTRSANSG(3));
// promisesArray.push(promiseTRJANSG(2));
// promisesArray.push(promiseTRSANSG(4));
// var handleAllPromises = Promise.all(promisesArray);
// handleAllPromises.then(function(values) {
//   console.timeEnd("Promise.All");
//   console.log("All the promises are resolved", values);
// });
// handleAllPromises.catch(function(reason) {
//   console.timeEnd("Promise.All");
//   console.log("One of the promises failed with the following reason ", reason);
// });


// console.time("Promise.race");
// var promisesArray = [];
// promisesArray.push(promiseTRSANSG(4));
// promisesArray.push(promiseTRSANSG(3));
// promisesArray.push(promiseTRSANSG(2));
// promisesArray.push(promiseTRJANSG(3));
// promisesArray.push(promiseTRSANSG(4));
// var promisesRace = Promise.race(promisesArray);
// promisesRace.then(function(values) {
//   console.timeEnd("Promise.race");
//   console.log("The fasted promise resolved", values);
// });
// promisesRace.catch(function(reason) {
//   console.timeEnd("Promise.race");
//   console.log("The fastest promise rejected with the following reason ", reason);
// });


// console.time("Promise.race");
// var promisesArray = [];
// promisesArray.push(promiseTRSANSG(4));
// promisesArray.push(promiseTRSANSG(6));
// promisesArray.push(promiseTRSANSG(5));
// promisesArray.push(promiseTRJANSG(3));
// promisesArray.push(promiseTRSANSG(4));
// var promisesRace = Promise.race(promisesArray);
// promisesRace.then(function(values) {
//   console.timeEnd("Promise.race");
//   console.log("The fasted promise resolved", values);
// });
// promisesRace.catch(function(reason) {
//   console.timeEnd("Promise.race");
//   console.log("The fastest promise rejected with the following reason ", reason);
// });