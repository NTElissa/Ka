function toggleNav() {
    var nav = document.getElementById("topnav");
    var navLinks = document.getElementById("nav-links");
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
    navLinks.style.display = (navLinks.style.display === "block") ? "none" : "block";
}
