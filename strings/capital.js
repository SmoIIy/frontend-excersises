const example = "PeTeR";

const toLowerCase = example.toLowerCase();
const answer = toLowerCase.substring(2,3).toUpperCase();
const final = toLowerCase.substring(0,2) + answer + toLowerCase.substring(3);
console.log(final); 