class Person {
    constructor (name) {
        console.log(name + " Person Constructor");
    }
    getID(){
        return 10;
    }
}

class Employee extends Person {
    constructor (name) {
        super(name);
        console.log(name + " Employee Constractor");
    }
    getID(){
        return 50;
        // return super.getID(); // To return the value of the parent's method.
    }
}

let e = new Employee("Rani");
console.log(e.getID());
