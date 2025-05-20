//Adding method to constructor function

function Person(first, last) {
    this.firstName = first,
    this.lastName = last,
    this.getFullName = function() {
        return this.firstName + " " + 
        this.lastName;
    }
}
//The 
const person1 = new Person("John", "Doe");
const person2 = new Person("Jane", "Doe");

console.log(person1.getFullName());
console.log(person2.getFullName());
