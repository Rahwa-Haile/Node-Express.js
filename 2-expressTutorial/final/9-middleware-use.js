const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//req=>middleware=>res

// app.use(logger)
// app.use('/api', logger)//Now this runs for every route that starts with /api (/api kem / tkutser (it becomes our base). slezi url log gber knblo kelena /products ilu yjmr)
// app.use([logger, authorize])// using multiple middlewares
app.use([authorize, logger])//middlewares run in the order that they were placed
app.get('/', (req, res)=>{
    res.send('Home page')
})
// app.use(logger)// The place at which this is placed matters. In this case the logger won't be available for home page

app.get('/about', (req, res)=>{
    res.send('About page')
})
app.get('/api/products', (req, res)=>{
    res.send('products')
})
app.get('/api/items', (req, res)=>{
    console.log(req.user)
    res.send('items')
})
// app.get('/api/items', [ logger, authorize], (req, res)=>{//adding both to one route
//     console.log(req.user)
//     res.send('items')
// })

app.listen(5000, (req, res)=>{
    console.log('App is running at port 5000')
})