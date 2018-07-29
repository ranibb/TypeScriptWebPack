let mySet = new Set();

mySet.add("Hello!");
mySet.add(1);
mySet.add(1); // Adding the same value to the set is ignored. Because a set can only contain unique values.

console.log(mySet.size);

let ob1 = {};
let ob2 = {};
mySet.add(ob1);
mySet.add(ob2);

console.log(mySet.size);

let newSet = new Set([1,2,3,4, ob1, ob2])

console.log("size of newSet: " + newSet.size);
console.log("Has value 1? " + newSet.has(1));
console.log("Has value 5? " + newSet.has(5));
console.log("Has ob1? " + newSet.has(ob1));
console.log("Deleting value 1 ... " + newSet.delete(1));
console.log("size of newSet after deleting: " + newSet.size);

let chainSet = new Set().add("Hello").add("World");

console.log(chainSet.size);
