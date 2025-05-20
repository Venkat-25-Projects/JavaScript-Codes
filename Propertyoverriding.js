class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello Person" + this.name);
    }
}
class Student extends Person {
        greet(){
            console.log("Hello Student " + this.name);
            
        }
}
const Student1 = new Student("Peter");
Student1.greet();
