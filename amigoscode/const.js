// Const

//This will overwrite the variable
let brand = "Antonelli"
console.log(brand);
brand = 10;
console.log(brand)

const brandTwo = "Antonelli"
console.log(brandTwo);
/*
brandTwo = 12;
This will give an error because you cant overwrite a const
*/
console.log(brandTwo);

const brandObject= {};
brandObject["Name"] = brand;
console.log(brandObject);
delete brandObject.Name;
console.log(brandObject);

const hello = function() {
    console.log("Hello");
}
hello();