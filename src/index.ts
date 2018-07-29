let myMap = new Map([
    ["fname", "Rani"],
    ["lname", "Abu Sultan"],
    ["Gender","Male"]
]);
console.log(`
Iterating over keys
-------------------------------------------
`);
for (let key of myMap.keys()){
    console.log(key);
}
console.log(`

Iterating over Values
-------------------------------------------
`);
for (let value of myMap.values()){
    console.log(value);
}
console.log(`

Iterating over entries pairs
-------------------------------------------
`);
for (let entry of myMap.entries()){
    console.log(`${entry[0]} -> ${entry[1]}`);
}
console.log(`

Iterating by destructing over entries pairs
-------------------------------------------
`);
for (let [key, value] of myMap.entries()){
    console.log(`${key} -> ${value}`);
}
console.log(`

Iterating over the entries arrays
-------------------------------------------
`);
for (let entry of myMap.entries()){
    console.log(entry);
}