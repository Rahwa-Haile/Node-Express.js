
//local
const secret = "super secret"
const john = "john"

//share
const peter = "peter"


console.log(module)//look at the object that says "exports". it is empty because we are not exporting anything.


//if you pay attention to the way we export we are writing something specific within the file not the file itself. That is because we only share the bare minimum when it comes to modules.




module.exports = { john,peter }

//there are multiple ways of exporting. for multiple datas we export them as objects