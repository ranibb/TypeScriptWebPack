class Person{
    constructor(public name:string){
        console.log(name + " Constructor");
    }
    static staticMethod(){
        console.log("Static Method");
    }
    greetPerson(){
        console.log("Hello " + this.name);
    }
}

let p1 = new Person("Rani");
let p2 = new Person("Abdallah");
Person.staticMethod();
p2.greetPerson();