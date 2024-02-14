const express = require('express');
const app = express();
const json = require('./demo.json');
app.get('/products',(req,res)=>{
    const data = json.filter(e=>{
        if(req.query.category === e.category){
            return e;}
    })
    res.send(data);
})
app.get('/filterproducts',(req,res)=>{
    console.log(req.query);
    const data = json.filter(e=>{
        if((req.query.category===e.category) && (req.query.price>=e.price))
        return e;
    })
    res.send(data);
})
app.listen(8080,(err)=>{
    if(err) console.log("Server Error");
    else console.log("Server is running on port 8080");
})