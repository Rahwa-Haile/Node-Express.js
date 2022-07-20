//abzi event require mgbar ayedlyenay user request balu event sle lkone

const http = require('http')


//using event emitter api
const server = http.createServer()
server.on('request', (req, res)=>{
     res.end('welcome')
})



server.listen(4000, ()=>{
    console.log('App is running at port 4000')
})