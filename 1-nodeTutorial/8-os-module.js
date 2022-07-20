//This module offers us many useful properties and methods for interacting with the operating system as well as the server.

const os = require('os')//so here we will not start with "./". That way node will know we are looking for the built in module

//info about current user

const user = os.userInfo()
console.log(user)


//method returns the system uptime in seconds

console.log(`The system has been running for ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()

}

console.log(currentOS);