const prompt = require('prompt-sync')({ sigint: true });



function longestEqualVowelsAndConsonants(){

    //a set of vowels upper & lowercase to avoid bigger if or switch block
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);

    const input = prompt("Enter a String: ");
    //removing unnecessary spaces
    const arr = input.split("").map(nums => (nums.trim()));
    console.log("arr", arr);
    
    const map = new Map();
    let sum = 0;
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        //console.log("arr[i] ", arr[i]);
        //console.log("vowels.has(arr[i]) ", vowels.has(arr[i]));
        
        //increasing sum by 1 if current character is a vowel
        if(vowels.has(arr[i])){
            sum = sum + 1;
        //decrementing sum by 1 if current character is a consonant
        }else if(/[a-zA-Z]/.test(arr[i])){
            sum = sum - 1;
        /*if map contains a sum which preciously had occur then the current substring is
        containg equal number of vowels and consonant, update max length*/ 
        }if(map.has(sum)){
            maxLength = Math.max(maxLength, i - map.get(sum));
        }else{
        //insert commulative sum if doen't exists
            map.set(sum, i);
        }
    }
    console.log("Longest equal number of vowels and consonants are :", maxLength);
}

longestEqualVowelsAndConsonants();














/*function longestEqualOnesAndZeroes(){
    const input = prompt("Enter an array of 0's and 1's sepeated by a space: ");
    const arr = input.split(" ").map(nums => Number(nums.trim()));
    //console.log("arr", arr);

    const map = new Map();
    let sum = 0;
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] === 1 ? 1 : -1;
        if(sum === 0){
            maxLength = i + 1;
        }else if(map.has(sum)){
            maxLength = Math.max(maxLength, i - map.get(sum));
        }else{
            map.set(sum, i);
        }
    }
    console.log("Maximum length of equal number os 0's and 1's is :", maxLength);
}

longestEqualOnesAndZeroes();





/*
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


