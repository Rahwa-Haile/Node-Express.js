const express = require('express')
const app = express()
const {products} = require('./data')


app.get('/' , (req, res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

// app.get('/api/products', (req, res)=>{
//     newProduct = products.map((product)=>{
//         const {id, name, image} = product
//         return{id, name, image}
//     })
//     res.json(newProduct)
// })
// app.get('/api/products/1', (req, res)=>{
//     const singleProduct = products.find((product)=> product.id===1)
//     res.json(singleProduct)
// })
app.get('/api/products/:productID', (req, res)=>{
    // console.log(req.params)// remember this always returns the param as a string
    const {productID} = req.params
    
    const singleProduct = products.find((product)=> product.id===Number(productID))
    
    // console.log(singleProduct)

    if(!singleProduct){
        return res.json('product doesnt exist')
    }
    return res.json(singleProduct)
})

//Route parameters can get way more complex than this

app.get('/api/products/:productID/reviews/:reviewID' , (req, res)=>{
    console.log(req.params)
    res.send('Hello there')

    //remember here the reviews is hard coded not params hence it is not a place holder(We can not change it since it is definite part of the route  )
})


app.get('/api/v1/query', (req, res)=>{
    console.log(req.query)
    // res.send('query string!!')
    const {search, limit} = req.query
    let sortedProducts = [...products]//We use let because this variable is not constant
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)})
        
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit)) 
    }
    if(sortedProducts.length < 1){
        return res.status(200).json({sucess:true, data: []})
    }
    
    res.status(200).json(sortedProducts)
    
})

//So for query, we don't have to specify them as part of the route
//Keep in mine if you enter correct query string you have two outputs. Either it will find the product and responds or it will be an empty array but still it is successful response.
//If you don't enter the correct query string then it will return all the products because none of the if statements will not be executed.
//Unlike in this example we don't have to create another route for the queries because we can just add it to the existing one. But for route params we have construct another route.
app.listen(5000, ()=>{
    console.log('App is running at port 5000.');
}) 