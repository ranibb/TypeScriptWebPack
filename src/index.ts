let str = "Hello";
let arr = [1,2,3];
let num = 5;
let obj = {
    name: "Rani"
}

// checking to see if String, Array, Number and Object has a mehtod defined for the key Symbol.iterator
// If it returns a function or method the object can be used with the for of loop
console.log("For String -" + typeof str[Symbol.iterator]);
console.log("For Array -" + typeof arr[Symbol.iterator]);
console.log("For Number -" + typeof num[Symbol.iterator]);
console.log("For Object -" + typeof obj[Symbol.iterator]);

//Create a custom iterator that works with array
let iterable = [1,2,3];

function createIterator(array) {
    let count = 0;
    return {
        next: function() {
            return count < array.length ? {value: array[count++], done: false} : {value: undefined, done: true};
        }
    }
}

let myIterator = createIterator(iterable);

// By making use of the next method we can iterate through each of the elements in the array.
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
/*
This functionality in fact is what the for of loop uses. it internally 
calls the next method until the done property is true. So, until the 
iteration is completed it keeps calling the next method and that is 
how it iterates through the elements of a collection.
*/