const person={
    firstName: "Elon",
    lastName: "Musk",
    greet: function(){
        console.log("Hello , my name is " + this.firstName + " " + this.lastName);
        
    }
}
person.greet();