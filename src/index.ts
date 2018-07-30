let person = {
    fname: "Rani",
    lname: "Abu Sultan"
}

// The short way
for (let p of Object.keys(person)) {
    console.log(p);
}

// The long way
/*person[Symbol.iterator] = function(){
    let properties = Object.keys(person);
    let count = 0;
    let isDone = false;
    let next = () => {
        if(count >= properties.length){
            isDone = true;
        }
        return{done: isDone, value:this[properties[count++]]};
    }
    return {next}
}

for (let p of person) {
    console.log(p);
}*/