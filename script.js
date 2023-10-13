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



let ham = document.querySelector(".menu-nav");
let menuContainer = document.getElementById("settingsModal");
let crossBtn = document.getElementById("closeSettings");

ham.addEventListener("click", () => {
    menuContainer.style.display = "block"
})

crossBtn.addEventListener("click", () => {
    menuContainer.style.display = "none"
})
