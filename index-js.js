const fs = require("fs");

window.onload = () => {
    const files = fs.readdirSync("./_posts");
    for (const file of files) {
        const newSec = document.createElement("section");
        const newText = document.createTextNode(file);
        newSec.appendChild(newText);
        const div = document.getElementById("list");
        div.appendChild(newSec);
    }
    
};