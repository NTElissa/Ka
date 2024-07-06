

function toggleNav() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}

document.getElementById("closeNav").addEventListener("click", function() {
    document.getElementById("nav-links").style.display = "none";
});
