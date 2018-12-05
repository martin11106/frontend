const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(serveStatic(__dirname + "/dist"));
app.get(/.*/,function(req,res){
    res.sendfile(__dirname + "/dist/index.html")
}); 
app.listen(port)
console.log('server start')