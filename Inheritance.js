class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello " + this.name);
    }
}

class Student extends Person {
   
}

const Student1 = new Student("Peter");
Student1.greet(); // Outputs: Hello Peter
