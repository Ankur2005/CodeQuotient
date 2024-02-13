const express = require('express');
const app = express();
const json = require('./demo.json');
app.get('/',(req,res)=>{
    console.log(req.query);
    const data = json.filter((e)=>{
        if(e.category==req.query.category)
        return e;
    })
    res.send(data);
})
app.listen(3001,(err)=>{
    if(err)
        console.log("unable to start server");
    else
    console.log("Server started...");
});