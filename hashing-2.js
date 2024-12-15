const prompt = require('prompt-sync')({sigint : true});


function checkFirstNonRepeatingCharacter(){
    const input = prompt("Enter a String:");
    const arr = input.split("").map(element => (element.trim()));
    //console.log("arr", arr);

    const map = new Map();

    for(let char of arr){
        if(!map.has(char)){
            map.set(char, 1);
        }else{
             map.set(char, map.get(char) + 1);
        }
    }

    //console.log("map ", map);

    for(let char of arr){
        if(map.get(char) == 1){
            console.log("First non-repeating character is :", char);
            return;
        }
    }
    console.log("All elements are duplicate!");
}

checkFirstNonRepeatingCharacter();


/*
function checkForDuplicateElements(){

    const input = prompt("Enter array elements seperated by spaces :");
    const arr = input.split(" ").map(nums => Number(nums.trim()));
    //console.log("arr", arr);
    const map = new Map();

    for(let nums of arr){
        //checking if duplicate entries present or not
        if(map.has(nums)){
            //return false, code executed
            return false;
        }else{
        //setting value for unique element    
            map.set(nums, true);
        }
    }
    return true;
}

function mainCheck(){

    const result = checkForDuplicateElements();
        if(result == false){
            console.log("Array contains duplicate elements");
        }else{
            console.log("Array doesn't conatins duplicate elements!");
        }
}

mainCheck();
*/