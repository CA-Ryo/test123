var express = require("express")

var app = express()
app.get('contact', function(req,res){
  res.send('Contact successfully.');
})
app.listen(3000,function(){
  console.log("Server started on port 3000")
});