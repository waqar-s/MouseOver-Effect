let main = document.querySelector("#container");
let circle = document.querySelector(".cursor");

main.addEventListener("mousemove", (dets) =>{
    circle.style.display = "block"; // Use double quotes for the string "block"
    circle.style.left = dets.x + "px"; // Added "px" to specify the unit
    circle.style.top = dets.y + "px";  // Added "px" to specify the unit
});

main.addEventListener("mouseleave", () => {
    circle.style.display = "none";
});



let ham = document.querySelector(".menu-nav-container");
let menuContainer = document.getElementById("settingsModal");
let crossBtn = document.getElementById("closeSettings");
let aboutMe = document.getElementById("aboutme");
let aboutMeTag = document.getElementById("aboutMeTag");
let head = document.getElementById("header");

let secName = document.getElementById("section-name")

ham.addEventListener("click", () => {
    menuContainer.style.display = "block"
    circle.style.zIndex = "999"
})

aboutMeTag.addEventListener("click", () => {
    aboutMe.style.display = "flex"
    secName.innerText = "| About Me"
    menuContainer.style.display = "none"
    circle.style.zIndex = "999"
    aboutMe.style.zIndex = "1"
    head.style.zIndex = "999"
})

crossBtn.addEventListener("click", () => {
    menuContainer.style.display = "none"
})
