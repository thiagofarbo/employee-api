const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const EmployeeSchema = new mongoose.Schema({

        name: {
            type:String,
            required:true,
        },
        address: {
            type:String,
            required:true,
        },
        phone: {
            type:String,
            required:true,
        },
        email: {
            type:String,
            required:true,
        },
        zipCode: {
            type:String,
            required:true,
        },
         createdAt:{
            type:Date,
            default: Date.now,
    },
});

EmployeeSchema.plugin(mongoosePaginate);

mongoose.model('Employee', EmployeeSchema);