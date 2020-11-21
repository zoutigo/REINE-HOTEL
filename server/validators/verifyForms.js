const Joi = require('@hapi/joi');


// Register validation
const registerValidation = (data)=> {

        // Joi validation
        let schema =  Joi.object({
            name: Joi.string().required().min(3).max(30),
            firstname: Joi.string().required(3).max(30),
            email: Joi.string().email().required(),
            password: Joi.string().required().pattern(new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$')), // 1 majuscule, 1 minuscule, 1 chiffre, 8 caracteres mini
            phone: Joi.string().required()
        })
    
        return schema.validate(data)
    
    }
    

// Login validation
const loginValidation = (data)=> {
    console.log(data)
    const schema = Joi.object({
      
        email: Joi.string()
        .min(6)
        .email(),
        password: Joi.string()
        .min(6)
        .required()
    })
        
        return schema.validate(data)
    
    }

// Rooms Types Creation

const roomTypeValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(30).valid('standard','affaire','prestige'),
        price: Joi.number().required().valid(15000, 20000, 25000),
        surface: Joi.number().required().min(10).max(50)
    })
    return schema.validate(data)
}

// create image Validation

const createImageValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50),
        track: Joi.string().required(),
        genre : Joi.string().required().valid('b64', 'svg'),
        section : Joi.string().required().valid('feature', 'slider','roomtype', 'service', 'user', 'other'),
        module: Joi.string().required().valid('landing', 'rooms', 'restaurant', 'booking', 'contact', 'header', 'footer', 'site', 'other'),
        category: Joi.string().required()
    })
    return schema.validate(data)
}


// list images per modules
const validateImageListrequest = (data) => {
    const schema = Joi.object({
        module: Joi.string().required().valid('landing', 'rooms', 'restaurant', 'booking', 'contact', 'header', 'footer', 'site', 'other'),
        genre : Joi.string().required().valid('b64', 'svg'),
        category: Joi.string().required(),
        section : Joi.string().valid('feature', 'slider','roomtype', 'service', 'user', 'other')

    })
    return schema.validate(data)
}


module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
module.exports.roomTypeValidation = roomTypeValidation
module.exports.createImageValidation = createImageValidation
module.exports.validateImageListrequest = validateImageListrequest