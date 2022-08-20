const express = require('express')
const app = express()
const people = require('./2-expressTutorial/routes/people')
const auth = require('./2-expressTutorial/routes/auth')

//add static data
app.use(express.static('./2-expressTutorial/final/methods-public'))

//parse form data

app.use(express.urlencoded({ extended: false })) //This parses the data and add it to the body.
app.use(express.json())//This handles the JSON data being sent from the front end
app.use('/api/people', people)
app.use('/login', auth)




app.listen(5000, ()=>{
    console.log('App is running at port 5000');
})