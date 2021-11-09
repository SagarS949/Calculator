const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// app.get("/",function(req,res){
//     res.sendFile(__dirname + "/index.html");
// })

// app.post("/",function(req,res){
//     //console.log(req.body)                 //json format. num1: '',num2: '',.....
    
//     var num1 = Number(req.body.num1);
//     var num2 = Number(req.body.num2);

//     var result = num1 + num2;
//     res.send("The result is " + result + "!");
// })

app.get("/",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/",function(req,res){
    var weight  = parseFloat(req.body.weight);
    var height  = parseFloat(req.body.height);

    var bmi = weight/(height*height);

    res.send("Your BMI is " + bmi + "!");
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
});