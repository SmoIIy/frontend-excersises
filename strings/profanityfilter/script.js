const curseWords = [  {    bad: "var",    good: "const",  },
  {    bad: "float",    good: "grid",  },  
  {    bad: "marquee",    good: "just don't",  },]; 

let theText = "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";

let splittext = theText.split("ord");

console.log(splittext.join("ting"));