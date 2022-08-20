const express = require('express')
const app = express()
const {people} = require('./data')


//add static data
app.use(express.static('./2-expressTutorial/final/methods-public'))

//parse form data

app.use(express.urlencoded({ extended: false })) //This parses the data and add it to the body.
app.use(express.json())//This handles the JSON data being sent from the front end

app.get('/api/people', (req, res)=>{
    
    res.status(200).json({success: true, data: people})
    // console.log(res)//question: where is our JSON response?
})

app.post('/api/people', (req, res)=>{
    // res.status(201).send('Success')
    const { name } = req.body
    console.log(req.body)
    if(!name) {
       return res.status(400).json({ success: false, msg: 'Please provide your name'})
    }
    res.status(201).json({ success: true, person: name })
    
})

app.post('/api/postman/people', (req, res)=>{
    const { name } = req.body
    if(!name) {
        return res.status(400).json({ success: false, msg: 'Please provide your name'})
     }
     res.status(201).json({ success: true, data: [...people, name]})
})

app.post('/login' , (req, res)=>{
    console.log(req.body)
    const {name} = req.body
    if(!name) { 
        return res.status(401).send('Please provide credential')
    }
    res.status(200).send(`Hello ${name}`)
})

app.put('/api/people/:id' , (req, res)=>{
    const { id } = req.params 
    const { name } = req.body
   
    const person = people.find((person)=>person.id===Number(id))

    if(!person) {
        return res.status(404).send(`No person with id number ${id}`)
    }
    const newPeople = people.map((person)=>{
        if(person.id===Number(id)){
            person.name = name
        }
         return person
    })
    res.status(200).json({ success: true, data: newPeople})
})

app.delete('/api/people/:id', (req,res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id))

    if(!person){
        res.status(404).send(`No such person with an id ${req.params.id}`)
    }

    const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
    res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, ()=>{
    console.log('App is running at port 5000');
})