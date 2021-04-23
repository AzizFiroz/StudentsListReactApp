const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    Name :{type: String,required:true},
    rollno:{type: String,required:true},
    
    email :{type: String,required:true},
    phone: {type: String,required:true},
    semester :{type: String,required:true}
    
},{
    versionKey : false
});

module.exports = mongoose.model('Student',StudentSchema);