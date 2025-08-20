const express = require('express')
const app = express();
const port = 3000;
let morgan = require('morgan'); 
const mongoose = require('mongoose');
const blogModel = require('./models/Blog')
const expressLayouts = require('express-ejs-layouts') 

//using view engine(ejs)
app.set('views', './views');
app.set('view engine', 'ejs')
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




// create a new route to test (CRUD)
app.get('/add-blog', async (req, res) =>{
    let blog = new blogModel({
        title: "Blog title 3",
        intro: "Blog intro 3",
        body: "Blog body 3"
    });

    await blog.save();
    res.send('Blog saved')
});

app.use(morgan('dev'));
app.use(express.static('public'));


app.get('/',async(req,res)=>{

    // use find method to fetch all data from mongo
    let blogs = await blogModel.find().sort({createdAt : -1})
    console.log(blogs);
    res.render('home', {
        blogs,
        title : 'Home'
    })
})

app.get('/about',(req,res)=>{
     res.render('about', {
         title : 'About'
     })
})

app.get('/contact',(req,res)=>{
     res.render('contact', {
         title : 'Contact'
     })
})

app.get('/blogs/create',(req,res)=>{
     res.render('blogs/create', {
         title : 'Blog Create'
     })
})

// use (use function) to handle 404 Page
app.use((req,res)=>{
    res.status(404);
    res.render('404',{
        title:"404 not found"
    });
})


