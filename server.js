const http = require('http');

// after listening go to request and respond
const server = http.createServer( (req,res) => {
    console.log('Data is requesting from client');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');

    // not loading any more => work done
    res.end();
})

//doing this first 
server.listen(3000, 'localhost', () =>{
    console.log('server listening on port 3000')
})
