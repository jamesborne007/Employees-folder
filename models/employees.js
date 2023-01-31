
const mongoose = require('mongoose');
const Schema = mongoose.Schema

// name roles, level, age
// timestamps - createdAt, updatedAt
const employeeSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    },
},
{timestamps:true}
)

module.exports = mongoose.model('Employee', employeeSchema);
// or u can do it like dis = const Employee = mongoose.model('Employee', employeeSchema);
// module.exports = employee