const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const roomSchema = new Schema({
    number : {type: Number , enum : [1,2,3,4,5,6,7,10,11,12] } ,
    floor : {type: Number , enum: [0,1,2,3,4]},
    description: {type: String , max: 100},
    type : [{type: Schema.Types.ObjectId, ref: 'RoomType'}],
    createdBy : {type: Schema.Types.ObjectId, ref: 'User', required: true},
    createdAt: {type: Date , required:true}
})


module.exports = mongoose.model('Room', roomSchema)