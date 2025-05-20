const person={
    firstName: "Elon",
    lastName: "Musk",
    greet: function(){
        console.log("Hello" + this.firstName);
        
    }
}
person.greet();