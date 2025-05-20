function Person(fName, lName){
    this.firstName = fName
    this.lastName = lName
}

Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName
}

const person1 = new Person("Elon", "Musk");
const person2 = new Person("Pawan", "Kalyan");

console.log(person1.getFullName());
console.log(person2.getFullName());