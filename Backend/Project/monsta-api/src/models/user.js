const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required'],
        match: /^[a-zA-Z ]{2,15}$/,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    mobile_number: {
        type: String,
        required: [true, 'Mobile number is required'],
        match: /^[0-9]{8,15}$/,
    },
    role_type : {
        type : String,
        required: [true, 'Type is required'],
        enum : ['Admin', 'User']
    },
    image : {
        type : String,
        default : '',
    },
    status : {
        type : Boolean,
        default : true,
    },
    order : {
        type : Number,
        default : 0,
        min : [0, 'Minumum value must be greather than 0'],
        max : [1000, 'Maximum value must be less than 1000'],
    },
    created_at : {
        type : Date,
        default : Date.now()
    },
    updated_at : {
        type : Date,
        default : Date.now()
    },
    deleted_at : {
        type : Date,
        default : ''
    }
});

const userModal = mongoose.model('users',userSchema);

module.exports = userModal;