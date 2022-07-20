//import then invoke

const express = require('express')

const app = express()


//takes in two parameters, the path/route and a callback function that runs when that specific route is hit

//home page

app.get('/', (req, res)=>{
    res.status(200).send('Home page')
    //even tho express handles the status code for us, it is a common practice to explicitly send it ourselves
})


//about page 

app.get('/about' , (req, res)=>{
    res.status(200).send('About page')
})

app.all('*' , (req, res)=>{
    res.status(404).send('<h1>Page not found</h1>') // This just alters the default browser text for unfound pages
})


app.listen(5000, ()=>{
    console.log('Server is listening at port 5000')
})



//methods

//app.get // this is the default one for browsers
//app.post
//app.put
//app.delete // the first for are http verbs or messages
//app.all //just handles all the http verb. So what ever the method if the page doesn't exist this is executed.
//app.use //This is for middleware
//app.listen                                                                                                