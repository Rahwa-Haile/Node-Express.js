const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age)=>{
    console.log(`data has been received. ${name} is ${age} years old.`)
})

customEmitter.on('response', ()=>{
    console.log('some other logic here')
})

customEmitter.emit('response', 'Rahwa', '24')       

