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



  const userIds = [234, 987, 453, 222, 349];
async function fetchDetails() {
  for (const id of userIds) {
    try {
      const userData = await getUserDetails(id);
      console.log(userData);
    } catch (error) {
      console.log(`Error fetching user id`);
    }
  }
}
function getUserDetails(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       
      if (id >= 1 && id <= userIds.length)
      {
        resolve({ id, data: "id is present" });
      } else {
        reject(`invalid id number: ${id}`);
      }
    }, 2000);
  });
}
fetchDetails()
getUserDetails

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


const see=async()=>{
    try{let result= await performTask;
        console.log(result);

    }
    catch{
        console.log("calculate better");
    }
}
see()

