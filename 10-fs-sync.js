const { readFileSync , writeFileSync } = require('fs')//notice here we used destructuring for method not property


console.log("start")
const first = readFileSync('./content/first.txt', 'utf8')//here we have to provide two parameters; the path and encoding system
const second = readFileSync('./content/second.txt', 'utf8')


console.log(first, second)


writeFileSync('./content/result-sync.txt',`Here are the two files ${first} ${second}`)//Also here we pass two parameters; the path and the value. if the filename doesn't exist node will automatically create it for us. keep in mind this method overwrites the original file

//if we want to append we add one more argument which is a property

writeFileSync('./content/result-sync2.txt', `still appending`, { flag:'a'})

console.log('done with this task')
console.log('Starting with the next task')



//In synchronous approch node executes everything line by line thus it is not efficient in serving all users. Some users might have to wait too long until the current one with the long task is done. So the application becomes down