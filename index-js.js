window.onload = () => {
    const newSec = document.createElement("section");
    const newText = document.createTextNode("something");
    newSec.appendChild(newText);
    const div = document.getElementById("list");
    div.appendChild(newSec);
};