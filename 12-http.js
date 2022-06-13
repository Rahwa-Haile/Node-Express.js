const http = require('http')

const app = http.createServer((req, res)=>{

    // res.end('Hi welcome to our page')//alternative way of writing and ending the response
    // res.write('Hi, welcome to our home page')
    // res.end()
    if(req.url=="/"){
        res.end('Hi this is our home page')
    }else if(req.url=="/about"){
        res.end('Hi this the about us page')
    }
    else{
        res.end(`
        <h1>Oops we cant find that page</h1>
        <a href="/">back to home</a>`)
    }
console.log(req)

})

//res-response
//req-request (is a big object e)




app.listen(5000)