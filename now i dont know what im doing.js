const {request, response } = require("express");
const express = require("express");
const username = "Inverse"


const app = express();
app.get("/", (req, res) => {

    res.send(`welcome ${username}`);
    console.log(`"${username} has Connected"`);
});


app.listen(90, () => {
console.log(`"Connected}"`);
}); 
