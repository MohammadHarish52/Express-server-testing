//jshint esversion:6

const express = require('express')

const app = express();
 
//what should happen when a browser makes a get request to the server

app.get("/",(req,res)=>{
    res.send("Hello World") //sending back data as response
})

app.get("/contact",(req,res)=>{
    res.send("contact detail is namaste bablu") //sending back data as response
})

app.get("/about",(req,res)=>{
    res.send("achin kya hai sachin , lappu sa hai sachin , bolna usko awe na jhingur sa ldka , kya hi pyar krega kisi se") //sending back data as response
})
app.get("/helll",(req,res)=>{
    res.send("hell bahho , lappu sa hai sachin , bolna usko awe na jhingur sa ldka , kya hi pyar krega kisi se") //sending back data as response
})


app.listen(3000,()=> console.log("servwr started")
);
