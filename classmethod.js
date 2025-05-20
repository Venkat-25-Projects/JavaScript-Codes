class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    #fullName() {
        return this.firstName + " " + this.lastName;
    }
    display(){
        console.log(this.#fullName());
        
    }
}

const person1 = new Person("Peter", "B");
person1.display();
