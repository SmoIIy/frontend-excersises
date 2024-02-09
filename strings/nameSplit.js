const fullName = "Peter Heronimous Lind"
//const arrayName = fullName.split(" ");
//const firstName = arrayName[0];
//const middleName = arrayName[1];
//const lastName = arrayName[arrayName.length-1];
const firstName = fullName.substring(0, fullName.indexOf(" "));
const middleName = fullName.substring((fullName.indexOf(" ") +1), fullName.lastIndexOf(" "));
const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1)

console.log(firstName);
console.log(middleName);
console.log(lastName);