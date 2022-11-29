const express = require('express');
const app= express();
//set templating engiine ejs
app.set('view engine','ejs');
//serving static files
app.use(express.static('public'));
//rout
app.get('/',(req, res)=>{
res.render('home');
})

app.get('/about',(req, res)=>{
    res.render('about');
    })
//server
app.listen(3000,()=>console.log('server is running'));
