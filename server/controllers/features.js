const Joi = require('@hapi/joi')
const Feature = require('../models/Features')

module.exports.createFeature = (req, res)=> {
    res.send('Create Feature')
}

module.exports.listFeature = (req, res) => {
    res.send('List Features')
}

module.exports.readFeature = (req, res) => {
    res.send('Read Feature')
}

module.exports.updateFeature = (req, res) => {
    res.send('Update Feature')
}

module.exports.deleteFeature = (req, res) => {
    res.send('Delete Feature')
}
