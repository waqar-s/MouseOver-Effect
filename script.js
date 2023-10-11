let main = document.querySelector("#container");
let circle = document.querySelector(".cursor");

main.addEventListener("mousemove", (dets) =>{
    circle.style.display = "block"; // Use double quotes for the string "block"
    circle.style.left = dets.x + "px"; // Added "px" to specify the unit
    circle.style.top = dets.y + "px";  // Added "px" to specify the unit
});

window.addEventListener("mouseleave", () => {
    circle.style.display = "none";
});
