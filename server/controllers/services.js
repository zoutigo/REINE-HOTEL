const Joi = require('@hapi/joi')
const Service = require('../models/Services')

module.exports.createService = (req, res)=> {
    res.send('Create Service')
}

module.exports.listServices = (req, res) => {
    res.send('List Services')
}

module.exports.readService = (req, res) => {
    res.send('Read Service')
}

module.exports.updateService = (req, res) => {
    res.send('Update Service')
}

module.exports.deleteService = (req, res) => {
    res.send('Delete Service')
}
