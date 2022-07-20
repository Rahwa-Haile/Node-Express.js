const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('./public'))

app.get('/', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})
app.all('*', (req, res)=>{
    res.status(404).send('file is not found')
})


app.listen(5000, ()=>{
    console.log("app is listening on port 5000")
    
})