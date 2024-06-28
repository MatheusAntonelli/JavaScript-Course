//Obects
var person = {
    firstName: "Matheus",
    lastname : "Antonelli",
    age: 21,
    balance: 10.23 ,
    dob: new Date(2002, 2 ,25).toJSON,
    isMale: true,
    address: {
        city: "Foz do Iguacu",
        postcode: 2123456

    }
}
//Acessing objects
console.log(person);
console.log(person.age);
console.log(person.firstName);
console.log(person.balance);
console.log(person.address.city);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));