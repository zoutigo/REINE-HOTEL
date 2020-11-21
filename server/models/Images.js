const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const imageSchema = new Schema({
    name : {type: String, required: true, min:2, max: 50},
    genre: {type: String , required: true, enum: ['b64', 'svg'] },
    section: {type: String , enum: ['feature', 'slider', 'roomtype', 'service', 'user', 'other']},
    module: {type: String , enum:['landing', 'rooms', 'restaurant', 'booking', 'contact', 'header', 'footer', 'site', 'other']},
    category: {type: String, required:true},
    track : {type: String, required: true , min:2 , max: 10000 },
    createdBy : {type: Schema.Types.ObjectId, ref: 'User', required: true},
    createdAt: {type: Date , required:true}
})


module.exports = mongoose.model('Image', imageSchema);