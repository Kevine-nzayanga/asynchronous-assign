// Write an asynchronous function that accepts a message string 
// and a delay time in milliseconds. The function should log the message
//  to the console after the specified delay time.
function entry(message) {
    console.log({message});
}
setTimeout(entry,5000,"Time to shine")

// You have an array of user IDs and a function getUserData(id) 
// that returns a Promise with user data when given a user ID. Write
//  an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

array=[3423,5678,1234,8976]
function getUserData(id) {
    let 
}

// You have an asynchronous function performTask() that returns a Promise. The Promise resolves
//  if the task is successful and rejects if there's an error. Write a function that calls performTask() 
//  and logs a custom success message if the task is successful, and a custom error message if 
//  there's an error.
let addition=23+10
  
let performTask=new Promise((resolve,reject)=>{
    if (addition==33) {
        resolve("Addition successful")
    }
    else{
        reject("error, Wrong answer")
    }
})
// .then(console.log("success"))
// .catch(console.log("Try harder"))
// .finally(console.log("nice one"))


console.log(performTask);
