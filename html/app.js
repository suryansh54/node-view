var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
    console.log("Open port 3000");
});