const fs = require("fs");

window.onload = () => {
    console.log(fs.readdirSync("./_posts"));
    const newSec = document.createElement("section");
    const newText = document.createTextNode("hi");
    newSec.appendChild(newText);
    const div = document.getElementById("list");
    div.appendChild(newSec);
};