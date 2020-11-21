const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const userSchema = new Schema({
    email : {type : String, required: true, max: 30},
    password : {type: String , required : true , min:2 , max: 2000},
    fisrtname: {type: String , required:true, min:2, max:20},
    name: {type: String , required:true, min:2, max:20},
    phone: {type: Number},
    role : {type: String , default: 'costumer', enum: ['costumer', 'employee', 'moderator', 'admin']},
    createdAt: {type: Date , required: true }
})


module.exports = mongoose.model('User', userSchema)
