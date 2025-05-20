function Person(fName, lName){
    this.firstName = fName
    this.lastName = lName
}

Person.prototype.gender = 'male';

const person1 = new Person("Elon", "Musk");
const person2 = new Person("Pawan", "Kalyan");
//After printing the console then the gender will be male for both the persons.
console.log(person1.gender);
console.log(person2.gender);
