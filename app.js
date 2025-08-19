const express = require('express')
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.sendFile('./views/home.html', {root : __dirname})
})

app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html', {root : __dirname})
})

app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

app.get('/contact',(req,res)=>{
    res.sendFile('./views/contact.html', {root : __dirname})
})

app.get('/contact-us',(req,res)=>{
    res.redirect('/contact')
})

// use (use function) to handle 404 Page
app.use((req,res)=>{
    res.status(404);
    res.sendFile('./views/404.html', {root: __dirname})
})

//remark code is runing line by line if 404 direct function is append on the about-us => about-us dont run anymore

app.listen(port, () =>{
    console.log('App.js is listening on port 3000')
})