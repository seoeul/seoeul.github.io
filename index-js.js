window.addEventListener("load", event => {
    const newSec = document.createElement("section");
    const newText = document.createTextNode("hi");
    newSec.appendChild(newText);
    const div = document.getElementById("list");
    div.appendChild(newSec);
});