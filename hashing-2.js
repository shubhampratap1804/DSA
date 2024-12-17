const prompt = require('prompt-sync')({sigint : true});




/*Given an array of integers and a target sum, find all unique quadruplets in the array that 
sum up to the target using hashing.
sample Input [1,0,-1,0,-2,2], 0
Sample Output [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
*/


/**
 * 
 we are just not going for quadruplets, but also triplets and duplets.
 Let's start with the easy one, Duplets.
 1.
 */

/*
 function targetSumDuplets(target){
    const arr = [1,6,2,8,3,2,1,5,9,4,6,8,1];
    const map = new Map();
    const result = [];

    for(let num of arr){
        let complement = target - num;
        if(map.has(complement)){
            result.push([complement, num]);
        }else{
            map.set(num, true);
        }
    }

    console.log("Target sum for duplets is : ", result);
 }
 targetSumDuplets(6);
*/

/**
 * 
 2. Triplets

 function targetSumTriplets(target){
    const array = [1,6,2,8,3,2,1,5,9,4,6,8,1];
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if(i> 0 && array[i] === array[i-1]) continue;

        let leftWindow = i + 1;
        let rightWindow = array.length - 1;


        while(leftWindow < rightWindow){
            const sum = array[i] + array[leftWindow] + array[rightWindow];
            if(sum == target){
                result.push([array[i],array[leftWindow], array[rightWindow]]);
                while(leftWindow < rightWindow && array[leftWindow] === array[leftWindow + 1]){
                    leftWindow++
                }
                while(leftWindow < rightWindow && array[rightWindow] === array[rightWindow - 1]){
                    rightWindow--;
                }
                leftWindow++;
                rightWindow--; 
            }else if(sum < target){
                leftWindow++
            }else rightWindow--;
        }
    }
    console.log("Target sum result for triplets is : ", result);
 }


 targetSumTriplets(10);
*/

/**
 3. Quadruplets
 */

 function targetSumQuadruplets(target){

    const array = [1,6,2,8,3,2,1,5,9,4,6,8,1];
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if(i > 0 && array[i] === array[i-1]){
            continue;
        }
        for (let j = 0; j < array.length; j++) {
            if(j>0 && array[j] === array[j-1]){
                continue;
            }
            let leftWindow = j + 1;
            let rightWindow = array.length - 1;
            while(leftWindow < rightWindow){
                const sum = array[i] + array[j] + array[leftWindow] + array[rightWindow];
                if(sum === target){
                    result.push([array[i], array[j], array[leftWindow], array[rightWindow]]);
                    while(leftWindow < rightWindow && array[leftWindow] === array[leftWindow + 1]){
                        leftWindow++;
                        rightWindow--;
                    }while(leftWindow < rightWindow && array[rightWindow] === array[rightWindow - 1]){
                        leftWindow++;
                        rightWindow--;
                    }
                    leftWindow++;
                    rightWindow--;
                }else if(sum < target){
                    leftWindow++;
                }else{
                    rightWindow--;
                }
            }
        }
    }
    console.log("Target sum result for Quadruplets is :", result);
 }

 targetSumQuadruplets(12);
/*
problem statement - find a set of 5 consecutive book that has maximum commulative price
1. this is a brute force approach
*/
/*
function bestBookPrice(){
    //prices of books displayed as row
    const prices = [20,40,34,54,54,12,67,86,12,15,7,90,67,34,43,10,55];
    let maxPrice = 0;


    for (let i = 0;i < prices.length - 5;i++) {
        let total = 0;
       for (let j = i; j < i + 5; j++) {  
            total += prices[j];
       }
       maxPrice = Math.max(total, maxPrice);
    }
    console.log("Maximum book price is : ", maxPrice);  
}

/*
2. Sliding window algorith
*/ 
/*
function bestBookPriceUsingSlidingWindowAlgorithm(k){

    const prices = [20,40,34,54,54,12,67,86,12,15,7,90,67,34,43,10,55];

    //sum of first k elements
    let sum = 0;
    for (let i = 0; i < k; i++) {
         sum += prices[i];
    }

    let maxSum = sum;
    //Iterating from K + 1 element to arr.length while updating maximum sum of k elements
    for (let i = 0; i < prices.length - k; i++) {
        sum = sum - prices[i] + prices[k + i];
        maxSum = Math.max(sum, maxSum);
    }
    console.log(`Maximum sum of ${k} books is ${maxSum}`);
}
//bestBookPrice();
//bestBookPriceUsingSlidingWindowAlgorithm(5);
/*
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