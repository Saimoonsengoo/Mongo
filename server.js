// const http = require('http');

// // after listening go to request and respond
// const server = http.createServer( (req,res) => {
//     console.log('Data is requesting from client');
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1>Hello World</h1>');

//     // not loading any more => work done
//     res.end();
// })

// //doing this first 
// server.listen(3000, 'localhost', () =>{
//     console.log('server listening on port 3000')
// })


const http = require('http');
const fs = require('fs');

const server = http.createServer( (req,res)=>{

    let filename;
    switch(req.url){
        case '/':
            filename ='home.html'
            break;

        case '/contact':
            filename ='contact.html'
            break;

        case '/about':
            filename='about.html'
            break;
        
        default:
            filename='404.html'
            break;
    }

    res.setHeader('Content_Type', 'text/html');
    fs.readFile('./views/'+filename ,(err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })
})

server.listen(3000, 'localhost', () =>{
    console.log('server listening on port 3000');
})