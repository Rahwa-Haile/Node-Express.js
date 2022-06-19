const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', {encoding: 'utf8', highWaterMark: 90000} )

//default 64kb
//last buffer = remainder
//highWaterMark-control size


stream.on('data', (result)=>{
    console.log(result)
})