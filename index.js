const readline = require("readline");

//interface for user inout

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});


//ask the user to enter the array

rl.question("Enter the array!", (userInput) =>{
     const array = userInput.split(",")
     console.log("Array length is: "+array.length);
     rl.close();
})