var mongoose = require('mongoose')

var Schema = mongoose.Schema

const featureSchema = new Schema({
    name : {type: String , required : true , min: 2 , max: 30},
    price: {type: Number , required: true} ,
    description: {type: String},
    image : {type: String , max: 2000},
    createdBy : {type: Schema.Types.ObjectId, ref: 'User', required: true},
    createdAt: {type: Date , required:true}
})

module.exports = mongoose.model('Feature', featureSchema)