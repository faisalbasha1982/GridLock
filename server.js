var express = require('express');

var app = express();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=> res.send("api running"));

app.listen(PORT,() => {
    console.log(`Server Started on PORT : ${PORT}`);
})
