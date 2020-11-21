const Joi = require('@hapi/joi')
const bcrypt = require('bcrypt')
const { PreconditionFailed, Unauthorized, TokenIvalid, BadRequest, Forbidden } = require('../utils/errors')
const jwt = require('jsonwebtoken')
const User = require('../models/Users')
const { registerValidation, loginValidation } = require('../validators/verifyForms')

module.exports.createUser = async (req, res, next)=> {

    const {value, error } = await registerValidation(req.body)
    if (error) {
        throw new BadRequest(error.details[0].message)
    }


    // check if email exist in database
   let emailVerif = await User.findOne({email:req.body.email})
   if (emailVerif) {
       throw new PreconditionFailed('Cet email est dejà enregistrée, veillez choisir une autre')
   }
   
   
    // password hash
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // insert in database
    let user = new User ({
         name: req.body.name ,
         firstname: req.body.firstname,
         email: req.body.email,
         password: hashedPassword,
         phone : req.body.phone,
         createdAt: Date.now()
         
     })
    
     try {
        const savedUser = await  user.save()
       
        let token = await jwt.sign({_id:user._id, role: user.role}, process.env.TOKEN_SECRET,{expiresIn: process.env.TOKEN_LOGIN_DURATION})
        res
        .status(200)
        .header('auth-token', token)
        .send({message:'utilisateur crée', user: user._id , token: token})

    } catch(err){ next(err) }
    
    // login the user

}

module.exports.listUsers = async (req, res) => {
    if (req.user.role === 'costumer'){
        throw new Forbidden('Page interdite')
    }
    
    try {
        let users = await User.find({})
        res.status(200).send({message: 'Liste des utilisateurs', users: users})
    }catch(err) { next(err)}

}

module.exports.readUser = (req, res) => {
    res.send('Read User')
}

module.exports.updateUser = (req, res) => {
    res.send('Update User')
}

module.exports.deleteUser = (req, res) => {
    res.send('Delete User')
}

module.exports.loginUser = async (req, res, next) => {

    const {value, error } = await loginValidation(req.body)
   // console.log(req.body)
    if (error) {throw new BadRequest(error.details[0].message)}

    // check if the email exists
    try {
        const user = await User.findOne({email: req.body.email})
        if (!user) {
            throw new BadRequest(`${req.body.email} n'est pas un utilisateur`)
        }
    
    // Password is correct
        try {
            const validPassword = await bcrypt.compare(req.body.password, user.password)
            if(!validPassword) {
                throw new BadRequest('Mot de pass incorrect')
            }

            // create and assign token
            const infos = {}
            user.name ? infos.name = user.name : null
            user.firstname ? infos.firstname = user.firstname : null
            infos.role = user.role
            infos._id = user._id

            const token = jwt.sign(infos, process.env.TOKEN_SECRET)
             
            res.header('auth-token',token).status(200).send(token)
  

        }catch(err) {
            next(err)
        }
    


    }catch(err){
        next(err)
    }

    
    
    
}