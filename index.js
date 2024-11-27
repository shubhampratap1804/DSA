//cuckoo algorithm

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

