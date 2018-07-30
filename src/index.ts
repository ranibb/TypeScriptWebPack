let s = Symbol("First Symbol - Any Description works here");
console.log(typeof s);
console.log(s.toString()); // caling the toString() method on the Symbol to get the description

let s2 = Symbol();
let s3 = Symbol();

console.log(s2 === s3);

let s4 = Symbol("Test");
let s5 = Symbol("Test");

console.log(s4 === s5);

// Create a new Symbol and add it to the built-in symbol registry using the Symbol.for() method
// Symbol.for("Description") checks first if a symbol with the same "Description" is already exists in the registery.
// If it doesn't exist then it will create a new symbol in the global registry with this "Description". This what happend in line 19.
// If it does exist then it will return that symbol with the same "Description". This what happend in line 20.
let s6 = Symbol.for("Description");
let s7 = Symbol.for("Description");

//s6 nd s7 have the same symbol
console.log(s6 === s7);

// Get the key (the "Description") that was associated with the symbol when the symbol was added to the global registery.
console.log(Symbol.keyFor(s6));

// A practical use of symbols is using it to create unique properties in an object.
let fname = Symbol("First Name");
let lname = Symbol("Last Name")
let person = {
    [fname] : "Rani",
    [lname] : "Abu Sultan",
    gender: "Male"
};

console.log(Object.getOwnPropertyDescriptors(person));
console.log(Object.getOwnPropertySymbols(person));
console.log(Object.getOwnPropertyNames(person));

