function showHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("project1").style.display = "none";
    document.getElementById("in-development").style.display = "none";
}

function showProject1() {
    document.getElementById("home").style.display = "none";
    document.getElementById("project1").style.display = "block";
    document.getElementById("in-development").style.display = "none";
}

function showInDevelopment() {
    document.getElementById("home").style.display = "none";
    document.getElementById("project1").style.display = "none";
    document.getElementById("in-development").style.display = "block";
}