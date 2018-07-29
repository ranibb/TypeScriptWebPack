console.log(
`
strong Set
--------------
`
);
let strongSet = new Set();
let obj1 = {};
strongSet.add(obj1);
console.log("Size of strongSet after adding obj is: " + strongSet.size);
obj1 = null;
console.log("Size of strongSet after setting obj = null remaines the same because a referance to the object still exists in the set: " + strongSet.size);
console.log("If you check and see if it has the obj? " + strongSet.has(obj1));
obj1 = [...strongSet][0]; //retrieving the obj
console.log("Checking after retrieving the obj ..." + strongSet.has(obj1));

console.log(
`
Weak Set
--------------
`
);

let weakSet = new WeakSet();
let obj2 = {};
weakSet.add(obj2);
console.log("If you check and see if it has the obj2? " + weakSet.has(obj2));
obj2 = null;
console.log("If you check and see if it has the obj2? " + weakSet.has(obj2));