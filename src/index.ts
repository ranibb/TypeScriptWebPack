console.log(`
forEach - Array
-------------------------------------------
`);
var numbers = [2,4,6,8];
numbers.forEach(arrayFunction);
function arrayFunction(element,index,array){
    console.log("arr[" + index + "]= "+ element);
    console.log(numbers === array);
}
console.log(`

forEach - Map
-------------------------------------------
`);
let myMap = new Map([
    ["fname","Rani"],
    ["lname","Abu Sultan"]
]);
myMap.forEach(mapFunction);
function mapFunction(value, key, callingMap){
    console.log(key + " " + value);
    console.log(myMap === callingMap);
    
}
console.log(`

forEach - Set
-------------------------------------------
`);
let mySet = new Set([1,2,3]);
mySet.forEach(setFunction);
function setFunction(value,key,callingSet){
    console.log(key + " " + value);
    console.log(myMap === callingSet);
}