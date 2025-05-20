let Person = class{
    constructor(){
        this.name = "John";
        this.age = 30;
    }
    getName(){
        return this.name;
    }
}
const person1 = new Person("Elon musk");

console.log(person1);
