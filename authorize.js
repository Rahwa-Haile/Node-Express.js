const authorize = (req, res, next) =>{
    // console.log('authorize')
    const {user} = req.query
    if(user === 'Rahwa'){
        req.user = {name: 'Rahwa', Father: 'Haile'}
        next()
    }
    else{
        res.status(401).send('You are not authorized to access this page')//pay attention here if not authorized it will not pass to the next middleware
    }
    
}

module.exports = authorize