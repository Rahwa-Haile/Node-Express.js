const {people} = require('../../data')


const getPeople =  (req, res)=>{
    
    res.status(200).json({success: true, data: people})
    // console.log(res)//question: where is our JSON response?
}

const createPerson = (req, res)=>{
    // res.status(201).send('Success')
    const { name } = req.body
    console.log(req.body)
    if(!name) {
       return res.status(400).json({ success: false, msg: 'Please provide your name'})
    }
    res.status(201).json({ success: true, person: name })
    
}

const createPersonPostman = (req, res)=>{
    const { name } = req.body
    if(!name) {
        return res.status(400).json({ success: false, msg: 'Please provide your name'})
     }
     res.status(201).json({ success: true, data: [...people, name]})
}

const updatePerson = (req, res)=>{
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
}

const deletePerson =  (req,res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id))

    if(!person){
        res.status(404).send(`No such person with an id ${req.params.id}`)
    }

    const newPeople = people.filter((person)=> person.id !== Number(req.params.id))
    res.status(200).json({ success: true, data: newPeople })
}



module.exports = { 
    getPeople, 
    createPerson, 
    createPersonPostman, 
    updatePerson, 
    deletePerson
}