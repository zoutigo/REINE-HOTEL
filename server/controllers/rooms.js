const Joi = require('@hapi/joi')
const Room = require('../models/Rooms')

module.exports.createRoom = (req, res)=> {
    res.send('Create Room')
}

module.exports.listRoom = (req, res) => {
    res.send('List Rooms')
}

module.exports.readRoom = (req, res) => {
    res.send('Read Room')
}

module.exports.updateRoom = (req, res) => {
    res.send('Update Room')
}

module.exports.deleteRoom = (req, res) => {
    res.send('Delete Room')
}

