const express = require('express')
const app = express();
const port = 3000;
let morgan = require('morgan'); 
const mongoose = require('mongoose');
const blogModel = require('./models/Blog')
const expressLayouts = require('express-ejs-layouts') 
const blogRouter = require('./routes/blogRoutes')

//using view engine(ejs)
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true})); // parse data from form 
app.use(expressLayouts);
app.set('layout', 'layouts/default')
//db url
let mongoUrl = 'mongodb+srv://saimoonsengoo02:PahhxmZSmjsLbjsh@cluster0.tbhtdwu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoUrl).then( () =>{
    console.log('connected to db');
    app.listen(port, () =>{
        console.log('App.js is listening on port 3000')
    })
}).catch( e =>{
    console.log(e);
});

app.use(morgan('dev'));
app.use(express.static('public'));


app.get('/about',(req,res)=>{
     res.render('about', {
         title : 'About'
     })
});

app.get('/contact',(req,res)=>{
     res.render('contact', {
         title : 'Contact'
     })
});

app.use('/blogs', blogRouter);  // this come from routes

// use (use function) to handle 404 Page
app.use((req,res)=>{
    res.status(404);
    res.render('404',{
        title:"404 not found"
    });
})


