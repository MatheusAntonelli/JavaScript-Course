// Loops
var names = ["Matheus", "Jamila", "Joe", "Aisha", "Bob"];

for (var i=0; i<= 10; i++) {
    console.log(i);
}
console.log("for i");
for( var i=0; i<names.length; i++) {
    console.log(names[i]);
}

console.log();
console.log("for of");

for (const name of names) {
    console.log(name);
}
console.log();
console.log("forEach");
names.forEach(function(name) {
    console.log(name);
})