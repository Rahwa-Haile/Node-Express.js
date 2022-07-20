const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res)=>{
    
    const fileStream = fs.createReadStream('./content/big.txt')    

    fileStream.on('open', ()=>{
        fileStream.pipe(res)
    })    
    fileStream.on('error' , (err)=>{
        res.end(err)
    })
})

server.listen(5000, ()=>{
    console.log('App is running on port 5000')
})