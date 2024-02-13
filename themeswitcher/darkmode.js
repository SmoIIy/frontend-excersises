const body = document.querySelector("body");
const themeselect = document.querySelector("#themes");
let theme = localStorage.getItem('theme');

body.setAttribute('data-theme', theme);

themeselect.addEventListener("change", function(){
    console.log(themeselect.value)
    body.setAttribute('data-theme', themeselect.value);
    localStorage.setItem("theme",themeselect.value)
})

