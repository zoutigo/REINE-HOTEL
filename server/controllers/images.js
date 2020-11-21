const Image = require('../models/Images')
const { BadRequest } = require('../utils/errors')
const { createImageValidation, validateImageListrequest} = require('../validators/verifyForms')

module.exports.createImage = async (req, res, next)=> {
    // after token check ,
   
    if (req.user.role !=='admin') {
        res.status(400).send({message:"Vous n'etes pas autorisés pour ce type d'opération", roles: req.user.role})
    }

  
    // form validation 
    const {value, error } = await createImageValidation(req.body)
    if (error) {
        throw new BadRequest(error.details[0].message)
    }
   

    // Check if the image is not already existing
    
    let query = {
        name: req.body.name ,
        track: req.body.track 
    }
    const checkImage = await Image.findOne(query)
    if (checkImage) return res.status(200).send({message: 'Cette image  existe deja'})

    // insert in database
  
    let image = new Image(req.body)
    image.createdAt = Date.now(), 
    image.createdBy = req.user._id
    //console.log(image)

    
    try {
       
        let newImage = await image.save()
        res.status(200).send({message:'Image a été créé', ImageID: newImage._id})

    }catch (err) { next(err) }

}

module.exports.listImages = async (req, res, next) => {
    
    try {
        let images = await Image.find({})
        res.status(200).send({message: 'Liste des images', images: images})
    }catch(err) {
        next(err)
    }
}

module.exports.listImagesModules = async (req, res, next) => {
    
    // request validation
    const {value, error } = await validateImageListrequest(req.params)
    if (error) {
        throw new BadRequest(error.details[0].message)
    }
    
    try {
        let images = await Image.find(req.params)
        res.status(200).send({message: 'Liste des images', images: images})
    }catch(err) { next(err) }
}

module.exports.readImage = (req, res) => {
    res.send('Read Image')
}

module.exports.updateImage = (req, res) => {
    res.send('Update Image')
}

module.exports.deleteImage = (req, res) => {
    res.send('Delete Image')
}
