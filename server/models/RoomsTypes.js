const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const roomTypesSchema = new Schema({
    name : {type: String , enum : ['standard', 'affaire', 'prestige'] } ,
    price : {type: Number , required: true},
    surface : {type: Number, required: true},
    services : [{type: Schema.Types.ObjectId, ref: 'Service'}],
    features : [{type: Schema.Types.ObjectId, ref: 'Feature'}],
    images: [{type:Schema.Types.ObjectId, ref: 'Image'}],
    createdBy : {type: Schema.Types.ObjectId, ref: 'User', required: true},
    createdAt: {type: Date , required:true} 
})


module.exports = mongoose.model('RoomType', roomTypesSchema)