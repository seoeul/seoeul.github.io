const express = require("express");

const app = express();
app.use(express.static(__dirname + "/public"));

app.listen("8000", () => {
    console.log("Server started!");
});

process.on("exit", code => {
    console.log(`Àbout to exit with code: ${code}`);
});