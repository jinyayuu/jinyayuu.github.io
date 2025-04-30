function showHome() {
    document.getElementById("home").style.display = "block";//shown
    document.getElementById("project1").style.display = "none";
    document.getElementById("in-development").style.display = "none";
}

function showProject1() {
    document.getElementById("home").style.display = "none";
    document.getElementById("project1").style.display = "block";//shown
    document.getElementById("in-development").style.display = "none";
}

function showInDevelopment() {
    document.getElementById("home").style.display = "none";
    document.getElementById("project1").style.display = "none";
    document.getElementById("in-development").style.display = "block";//shown
}