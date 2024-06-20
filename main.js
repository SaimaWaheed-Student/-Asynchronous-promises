"use strict";
// 1=== Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// async function fetchGreeting(): Promise<string> {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve('Hello from Karachi!');
//     }, 2000);
//   });
// }
// let myPromise = new Promise((resolve,reject)=>{
//   console.log("promise pending")
//   setTimeout(()=>{
//     //console.log("promise resolve")
//     //resolve (["saima","anshoo"])
//     console.log("promise rejected");
//     reject(new Error("data fatch faild"));
//   },2000);
// // })
// myPromise.then((res)=>console.log(res)
// )
// .catch((err)=>console.log("datafetch nhi hua")
// )
// // 2=== Write a function simulateTask that simulates a task by logging "Task started",
// // waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
// function simulateTask(): void {
//   console.log('Task started');
//   setTimeout(() => {
//     console.log('Task completed');
//   }, 1000);
// }
// simulateTask()
// // Write a function fetchData that returns a Promise which resolves with the string
// // "Data fetched successfully!" after a delay of 1 second.
// function fetchData(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data fetched successfully!");
//     }, 1000);
//   });
// }
// // Write a function fetchWithError that returns a Promise. It should randomly either
// // resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// // delay of 1 second. Handle the rejection using .catch
// function fetchWithError(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5; // Simulate random success/failure
//     setTimeout(() => {
//       if (success) {
//         resolve('Data fetched successfully!');
//       } else {
//         reject(new Error('Data fetch failed!'));
//       }
//     }, 1000);
//   });
// }
// // // Example usage with error handling
// fetchWithError()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error.message));
// //   Write a function executeSequentially that executes two functions fetchData and
// // processData sequentially using Promises, and logs the results in the order they are
// // called.
let executeSequentiallypromise;
(fetchData, processData) => {
    function executeSequentiallypromise() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield fetchData(); // Fetch data asynchronously
                const processedData = processData(data); // Process the fetched data
                console.log('Fetched data:', data);
                console.log('Processed data:', processedData);
            }
            catch (error) {
                console.error('Error:', error);
            }
        });
    }
};
executeSequentiallypromise();
function executeSequentially(fetchData, arg1, processData, arg3) {
    throw new Error("Function not implemented.");
}
function fetchData() {
    throw new Error("Function not implemented.");
}
