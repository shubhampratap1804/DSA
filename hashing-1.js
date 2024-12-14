const prompt = require('prompt-sync')({ sigint: true });



function longestPalindromicSubString(){

    const string = prompt("Enter the string to get longest substring : ");
    if(string.length <= 1 ){
        return string;
    }

    const map = new Map();
    let maxLength = 0;
    let longestPalindromicSubString = "";


    for (let i = 0; i < string.length; i++) {
       for (let j = i + 1; j < string.length; j++) {
        //creating all possible sub-strings
        const substring = string.slice(i, j);
        if(!map.has(substring)){
            map.set(substring, true);
        }

        if(pallindrome(substring)){
            if(substring.length > maxLength){
                maxLength = substring.length;
                longestPalindromicSubString = substring;
            }
        }
       }
    }
   console.log("Longest palindromic substring is : ", longestPalindromicSubString);
}


function pallindrome(string){
    //returns true if the reverse of a string is exactly same
    return string == string.split("").reverse().join("");
}


function longestNumberConsecutiveSubarray(){
    const numbers = prompt("Enter the numbers please seperated by a comma : ")

    //map function to convert all string values to pure numbers
    const arr = numbers.split(",").map(nums => Number(nums.trim()));
    const map = new Map();
    
    //using 'of' for loop to store exact values not indices of the array
    for(let nums of arr){
        map.set(nums, true);
    }

let maxLength = 0;
    for(let num of arr){
        //if a smaller number doesn't exists then current number is a start of new sequence
        if(!map.has(num - 1)){
            let currentNumber = num;
            let currentLength = 1;
            //iterating for all consecutive values
            while(map.has(currentNumber + 1)){
                currentLength += 1;
                currentNumber += 1;
            }
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    console.log("Maximum consecutive number length is : ", maxLength);
}

longestNumberConsecutiveSubarray();


















// function longestConsecutiveSubarray(){
//     const enteredValue = prompt("Enter a comma seperated array");
//     const arr = enteredValue.split(",");
//     let array = Array.from(arr);

//     if(array.length == 0 || array == ''){
//         return 0;
//     }

//     const map = new Map();
//     for(let nums in arr){
//         map.set(nums, true);
//     }

//     let maxLength = 0;

//     for(let nums in arr){
//         if(!map.has(nums - 1)){
//             let currentNum = nums;
//             let currentLength = 1;
//             while(map.has(currentNum + 1)){
//                 currentNum += 1;
//                 currentLength += 1;
//             }
//             maxLength = Math.max(maxLength, currentLength);
//         }
//     }
// }

// let result = longestConsecutiveSubarray();
// console.log("Result", result);






































































//cuckoo algorithm
/*
class CucKooHashTable {

    constructor(size){
        //size of the hash table
        this.size = size;
        this.tableOne = new Array(size).fill;
        this.tableTwo = new Array(size).fill;
        //max re-hash to avoid infinite loop check for insertion/retrieval
        this.maxRehash = 10;
    }

    //hash one return key(bucket --> index)
    hashOne(key) {
        return key % this.size;
    }
    //hash two return key(bucket --> index)
    hashTwo(key){
        return Math.floor(key / this.size) % this.size;
    }

    insert(key, value){
        let currentKey = key;
        let count = 0;

        while(count < this.maxRehash){
            const positnOne = this.hashOne(currentKey);
            const positnTwo = this.hashTwo(currentKey);

            //try placing the key in first suitable location i.e table One
            if(this.tableOne(positnOne) === null){
                this.tableOne(positnOne) = value;
                return true;
            }

            //if key is occupied in table One then evict existing key and replace with new key
            //[currentKey, this.tableOne(positnOne)] = [this.tableOne(positnOne), currentKey];

            let tempOne = this.tableOne[positnOne];
            this.tableOne[positnOne] = currentKey;
            currentKey = tempOne;


            //try placing the evicted key in table two
            if(this.tableTwo(positnTwo) === null){
                this.tableTwo(positnTwo) = value;
                return true;
            }

            //if key is occupied in table as well then evict the existing key and replace with new key
            //[currentKey, this.tableTwo(positnTwo)] = [this.tableOne(positnTwo), currentKey];
            
            let tempTwo = this.tableTwo[positnTwo];
            this.tableTwo[positnTwo] = currentKey;
            currentKey = tempTwo;

            //if all above condition for insertion fails, increase the count and try again
            count++;

        }
        return false;
    }

    searchKey(key){
        
        let positnOne = this.hashOne(key);
        let positnTwo = this.hashOne(key);

        if(this.tableOne(positnOne) === key || this.tableTwo(positnTwo) === key){
            //console.log("Key found!");
            return true;
        }
        //console.log("Sorry! key doesn't exists")
        return false;
    }

    deleteKey(key){
        let positnOne = this.hashOne(key);
        let positnTwo = this.hashOne(key);

        if(this.tableOne(positnOne) === key){
            this.tableOne(positnOne) = null;
            console.log("Deletion successful!")
            return true;
        }

        if(this.tableTwo(positnTwo) === key){
            this.tableTwo(positnTwo) = null;
            console.log("Deletion successful!")
            return true;
        }
        console.log("Deletion failed! key not found");
        return false;
    }

    displayTable(){
        console.log("Table 1 : ", this.tableOne);
        console.log("Table 2 : ", this.tableTwo);
    }
}

const hashTable = new CucKooHashTable(5);






hashTable.insert(12, "apple");
hashTable.insert(43, "banana");
hashTable.insert(15, "orange");
hashTable.insert(27, "mango");
hashTable.insert(37, "pineapple");

hashTable.displayTable();
*/


