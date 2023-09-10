const express = require("express");
const port = "http://localhost:3000/"

const app = express();

app.use(express.static(__dirname+"/public"));  //use this to use css files inside templates 

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})


app.listen(process.env.PORT || 3000,function(){
    console.log(`Server Started Sucessfully at ${port}`)
})
