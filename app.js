const express = require('express')
const app = express();
const port = 3000;

//using view engine(ejs)
app.set('views', './views');
app.set('view engine', 'ejs')

let blogs = [
    {title: "Blog 1", into: "This is blof 1 introduction."},
    {title: "Blog 2", into: "This is blof 2 introduction."},
    {title: "Blog 3", into: "This is blof 3 introduction."}
]

app.get('/',(req,res)=>{
    //dont need to use sendFile
    // res.sendFile('./views/home.html', {root : __dirname})
    res.render('home', {
        //sending data
        blogs
    })
})

app.get('/about',(req,res)=>{
    // res.sendFile('./views/about.html', {root : __dirname})
     res.render('about')
})

app.get('/contact',(req,res)=>{
    // res.sendFile('./views/contact.html', {root : __dirname})
     res.render('contact')
})

// use (use function) to handle 404 Page
app.use((req,res)=>{
    res.status(404);
    res.render('404');
    //res.status(404).render('404');
    // res.sendFile('./views/404.html', {root: __dirname})
})

//remark code is runing line by line if 404 direct function is append on the about-us => about-us dont run anymore

app.listen(port, () =>{
    console.log('App.js is listening on port 3000')
})