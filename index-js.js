const fs = require("fs");

window.onload = function() {
    // const title = "";
    // const f = fs.readdirSync("./_posts");
    // for (const file of f) {
    //     const newSec = document.createElement("section");
    //     const name = file.split('.');
    //     const list = name[0].split('_');
    //     title = list[0]
    //     const newText = document.createTextNode(title);
    //     newSec.appendChild(newText);
    //     const div = document.getElementById("list");
    //     div.appendChild(newSec);
    // }
    const newSec = document.createElement("section");
    const newText = document.createTextNode("hi");
    newSec.appendChild(newText);
    document.body.appendChild(newSec);
};
