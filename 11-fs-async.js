const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err)
        return                    
    }
    const first = result


    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err)
            return

        }

        const second = result

        console.log(first,second)

        writeFile('./content/result-async.txt',`here is the result: ${first}, ${second}`, (err,result)=>{
            if(err){
                console.log(err)
                return
            }

            console.log(result)//this will be undefined because we are writing to the file we are not getting anything back
            console.log('done with this task')
        })
    })
    
    

    //to make it have the same functionality (read both and write both in order) I have to write the other methods inside this call back function
})


console.log('starting next task')


//In asynchrounous approach the moments it starts executing the long task it just offloads and continue with the rest of the code and eventually go back to it. Other alternative codes are promises and async await. because this nested callbacks can be messy.



