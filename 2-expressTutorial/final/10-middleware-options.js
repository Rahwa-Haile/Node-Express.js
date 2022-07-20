const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')

//req=>middleware=>res

app.use(morgan('tiny'))

app.get('/', (req, res)=>{
    res.send('Home page')
})

app.get('/about', (req, res)=>{
    res.send('About page')
})
app.get('/api/products', (req, res)=>{
    res.send('products')
})
app.get('/api/items', (req, res)=>{
    res.send('items')
})


app.listen(5000, (req, res)=>{
    console.log('App is running at port 5000')
})