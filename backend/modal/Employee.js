const mongoose=require('mongoose')

const employeeschema=new mongoose.Schema({
    name:{type:String ,required:true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },  
    role: { type: String, default: 'employee' },
    name: { type: String, required: true },
})

module.exports=mongoose.model('Employee',employeeschema)