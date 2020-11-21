const RoomType = require('../models/RoomsTypes')
const { roomTypeValidation } = require('../validators/verifyForms')

module.exports.createRoomType = async (req, res)=> {
    // after token check ,
  
    if (req.user.role !=='admin') {
        res.status(400).send({message:"Vous n'etes pas autorisés pour ce type d'opération", roles: req.user.role})
    }

    // form validation 
    const {value, error } = await roomTypeValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // Check if the room type name is not already existing
    const newType = await RoomType.findOne({name: req.body.name})
    if (newType) return res.status(400).send({message: 'Ce type de chambre existe deja'})

    // insert in database
    let roomType = new RoomType(req.body)
    roomType.createdAt = Date.now()
    roomType.createdBy = req.user._id

    try {
       
        let newRoomType = await roomType.save()
        res.status(200).send({message:'Le type de chambre a été créé', readRoomTypeID: newRoomType._id})

    }catch (err) {
        res.status(400).send({message : 'Il y a eu un problème dans la creation de ce type de chambre', error: err})
    }

}

module.exports.listRoomType = async (req, res) => {
    
    try {
        let roomTypes = await RoomType.find({})
        res.status(200).send({message: 'Liste des types de chambre', roomTypes: roomTypes})
    }catch(err) {
        res.status(400).send('erreur dans la recherche des types de chambre')
    }
}

module.exports.readRoomType = (req, res) => {
    res.send('Read RoomType')
}

module.exports.updateRoomType = (req, res) => {
    res.send('Update RoomType')
}

module.exports.deleteRoomType = (req, res) => {
    res.send('Delete RoomType')
}

