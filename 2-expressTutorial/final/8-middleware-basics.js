const express = require('express')
const app = express()

//req=>middleware=>res


const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    // res.json('testing')//Ab defter this is what I mean when I said "you must always use next() unless you are planning to terminate the whole cycle by sending back the response"
    next()
}

app.get('/', logger, (req, res)=>{
    // const method = req.method
    // const url = req.url
    // const time = new Date().getFullYear()
    // console.log(method, url, time)
    //Now I cannot use this for every request 
    res.send('Home page')
})

app.get('/about',logger, (req, res)=>{
    res.send('About page')
})

app.listen(5000, (req, res)=>{
    console.log('App is running at port 5000')
})