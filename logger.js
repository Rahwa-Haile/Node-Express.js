const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    // res.json('testing')//Ab defter this is what I mean when I said "you must always use next() unless you are planning to terminate the whole cycle by sending back the response"
    next()
}

module.exports = logger