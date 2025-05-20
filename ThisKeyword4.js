const person={
    firstName: "Elon",
    secondName: "Musk",
    getFullName: function(){
        return this.firstName + " " + 
        this.secondName;
    }
}
console.log(person.getFullName());
