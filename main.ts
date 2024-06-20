// 1=== Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.


async function fetchGreeting(): Promise<string> {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Hello from Karachi!');
    }, 2000);
  });
}

let myPromise = new Promise((resolve,reject) => {
  console.log("promise pending")
  setTimeout(()=>{
    //console.log("promise resolve")
    //resolve (["saima","anshoo"])
    console.log("promise rejected");
    reject(new Error("data fatch faild"));
   
  },2000);
  
 })
myPromise.then((res)=>console.log(res)
)
.catch((err)=>console.log("datafetch nhi hua")

)


// // 2=== Write a function simulateTask that simulates a task by logging "Task started",
// // waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

function simulateTask(): void {
  console.log('Task started');
  setTimeout(() => {
    console.log('Task completed');
  }, 1000);
}
simulateTask()

// 3===  Write a function fetchData that returns a Promise which resolves with the string
// // "Data fetched successfully!" after a delay of 1 second.



function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1000);
  });
}



// // Write a function fetchWithError that returns a Promise. It should randomly either
// // resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// // delay of 1 second. Handle the rejection using .catch


function fetchWithError(): Promise<string> {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Simulate random success/failure

    setTimeout(() => {
      if (success) {
        resolve('Data fetched successfully!');
      } else {
        reject(new Error('Data fetch failed!'));
      }
    }, 1000);
  });
}


// // Example usage with error handling
fetchWithError()
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));


// //   Write a function executeSequentially that executes two functions fetchData and
// // processData sequentially using Promises, and logs the results in the order they are
// // called.



async function executeSequentially(fetchData: () => Promise<any>, processData: (data: any) => Promise<any>): Promise<void> {
  try {
    const data = await fetchData();
    const processedData = await processData(data);
    console.log('Fetched data:', data);
    console.log('Processed data:', processedData);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Example usage
const fetchDataExample = async () => {
  // Simulate fetching data
  return new Promise((resolve) => setTimeout(() => resolve({ message: 'Fetched data!' }), 1000));
};

const processDataExample = async (data: any) => {
  // Simulate processing data
  return new Promise((resolve) => setTimeout(() => resolve(`${data.message} Processed`), 500));
};

executeSequentially(fetchDataExample, processDataExample);

