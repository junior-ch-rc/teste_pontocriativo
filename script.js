let dropdown = document.getElementById("dropdown");
let btnDropdown = document.getElementById("btnDropdown");

btnDropdown.onclick = function() {
    if (dropdown.style.visibility == "visible") {
        dropdown.style.visibility = "hidden";
    } else {
        dropdown.style.visibility = "visible";
    }
};