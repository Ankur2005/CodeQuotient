const express = require('express');
const fs = require('fs');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}));
var count=0;
app.get('/signup',(req,res)=>{
    count++;
    res.status(400).send(`<h1>Invalid Request ${count}</h1>`)  
});
app.post('/signup',(req,res)=>{
    const x = JSON.stringify(req.body);
    fs.appendFile('./users.txt',`,\n${x}`,(err)=>{
        if(err) console.log("content not appended");
        else
        console.log("Successfully appended");
    })
    res.send("Done Signup");
})
app.listen(8080,(err)=>{
    if(err) console.log(err);
    else
    console.log("Success Server!!!");
})