import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var oncheck = [];
var task = ["buy socks", "practise with nodejs"];
var taskwork = ["buy socks", "practise with nodejs"];

function getCurrentDate(){
      const month = ["January", "February", 
      "March", 
      "April", 
      "May" ,
      "June", 
      "July", 
      "August", 
      "September", 
      "October ",
      "November" ,
      "December", ];

       const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 

       const d = new Date();
       var current =` ${weekday[d.getDay()]} , ${month[d.getMonth()]} ${d.getDate()}`;
       return current;
}

app.get("/", (req, res) => {
  
  var currentdate = getCurrentDate();
  res.render("index",{ task: task,
    currentdate:currentdate});
});


app.get("/work", (req, res) => {
  
  res.render("work.ejs",{ taskwork: taskwork});
});

app.post("/", (req, res) => {
  
  var newtask = req.body["newItem"];
  task.push(newtask);
  res.redirect("/");
  
});
app.post("/delete", (req, res) => {
  
  var tasknum = req.body["deleteItem"];
  task.splice(tasknum, 1);
  res.redirect("/");
  
});

app.post("/deletework", (req, res) => {
  
  var tasknum = req.body["deleteItem"];
  taskwork.splice(tasknum, 1);
  res.redirect("/work");
  
});

app.post("/work", (req, res) => {
  
  var newtaskwork = req.body["newItemwork"];
  taskwork.push(newtaskwork);
  res.redirect("/work");
  
});




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

