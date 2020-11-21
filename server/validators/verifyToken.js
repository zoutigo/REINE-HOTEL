const jwt = require('jsonwebtoken')
const { BadRequest , Unauthorized} = require('../utils/errors');

    module.exports= (req, res, next) =>{
        const token = req.headers["x-access-token"]
        // console.log(req.headers['authorization'])
       // console.log('x-access:', req.headers["x-access-token"])

       // const token = authHeader.substring(7, authHeader.length);
       
       // console.log(token)
       
        if(!token) {
            throw new Unauthorized('Vous devez vous connecter');
           
        }
        

        try {
            const verified = jwt.verify(token, process.env.TOKEN_SECRET)
            req.user = verified
            next()
        } catch(err) {
        //     console.log('ton token est pas bon')
        // res.status(400).send('Invalid TOKEN')
        next(err)
        }
        
    }