
 • Files
 • Websites
 • Trash
0% of 10 GB
Back DownloadShare
script.js

// Automatically update the copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();


// Subtle mouse interaction
const planet = document.querySelector(".planet");

document.addEventListener("mousemove", (event) => {

    const x = (event.clientX / window.innerWidth - 0.5) * 15;
    const y = (event.clientY / window.innerHeight - 0.5) * 15;

    planet.style.transform =
        `translate(${x}px, ${y}px)`;
});


// Reset the planet position when the mouse leaves
document.addEventListener("mouseleave", () => {
    planet.style.transform = "";
});
