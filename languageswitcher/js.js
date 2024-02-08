"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const locale = "da";

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
switchLanguage("da");

function switchLanguage(lang){
        
        footer.innerHTML = texts.lang.texts[0].text;
        header.innerHTML = texts.lang.texts[1].text;
        
}




console.log(texts.de.texts[0].text);