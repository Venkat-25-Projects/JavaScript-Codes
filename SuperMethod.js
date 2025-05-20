class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello " + this.name);
    }
}
class Student extends Person {
    constructor(name){
        super(name);
    }
}
const Student1 = new Student("Peter");
Student1.greet();
