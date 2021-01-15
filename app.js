const express=require('express');
const bodyParser = require('body-parser'); //required for accessing post data coming from form
const ejs=require('ejs');
const app=express();
const http=require('http').Server(app);



app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false})) 
app.use(bodyParser.json()); //a middleware
var work=[]; //storing list of works

app.get('/',(req,res)=>{
   res.render('index',{work : work});
});


app.post('/',(req,res)=>{
   var x=req.body.item;
   work.push(x);
        res.redirect('/');
})
app.listen(8000,()=>{
    console.log('up and runnng');
});