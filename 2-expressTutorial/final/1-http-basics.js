const http = require('http')
const { readFileSync } = require('fs')

const homePage = readFileSync('./navbar-app/index.html')

const server = http.createServer((req, res)=>{
   // console.log('user hit the server')
   // res.end(home page)

   //Now there are two short comings of this code. 1. We haven't provided any info or meta data about our response. 2. we haven't defined the url so it will display for every request. So if we add /about it still takes us to home page.
   //Let's try solving those issues

   //home page
   if(req.url==='/'){
       res.writeHead(200, {'content-type':'text/html'})// Here is how you write headers. The first parameter is the status code. and the second one is our meta data and they are always written in a key-value pair.
       // res.writeHead(200, {'content-type':'text/plain'})//Now the data that we are sending back won't be treated as an html as we changed the MIME type.
       res.write(homePage)
       res.end()
   }

   //About page
   else if(req.url === '/about'){
       res.writeHead(200, {'content-type':'text/html'})// Here is how you write headers. The first parameter is the status code. and the second one is our meta data and they are always written in a key-value pair.
       // res.writeHead(200, {'content-type':'text/plain'})//Now the data that we are sending back won't be treated as an html as we changed the MIME type.
       res.write('<h1>About page</h1>')
       res.end()
   } 

   //page not found
   else{
       res.writeHead(404, {'content-type':'text/html'})// Here is how you write headers. The first parameter is the status code. and the second one is our meta data and they are always written in a key-value pair.
       // res.writeHead(200, {'content-type':'text/plain'})//Now the data that we are sending back won't be treated as an html as we changed the MIME type.
       res.write('<h1>Page not found</h1>')
       res.end()

   }
    
   //optionally you can also add the status text in the headers
})

server.listen(5000)


