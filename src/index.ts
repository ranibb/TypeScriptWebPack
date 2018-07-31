interface Person {
    fname:string;
    lname:string;
    age?:number;
}

// As I am using the interface when declaring, I have to use all of it's properties!  
let employee1:Person = {
    fname: "Rani",
    lname: "Abu Sultan",
    age: 30
}

// if a property in the interface has the ? character then this property is optional.
let employee2:Person = {
    fname: "Abdullah",
    lname: "Abu Sultan",
}