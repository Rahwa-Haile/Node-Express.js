const express = require('express')
const app = express()

app.use(express.static('./public'))

app.all('*', (req,res)=>{
    res.status(400).send('Page not found')
})

app.listen(5000, ()=>{
    console.log('app is running at port 5000');
})


//Because we gave damped all of our files as static assets we don't to specify the absolute path of our index file.