const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required'],
        match: /^[a-zA-Z ]{2,15}$/,
        minLength : [3, 'Minumum length must be 3 charater'],
        maxLength : [15, 'maximum length must be 15 charater'],
    },
    parent_category_id : {
        type : String,
        // required : [true, 'Parent Category is required'],
        ref : 'categories'
    },
    parent_category_ids : [{
        type : String,
        // required : [true, 'Parent Category is required'],
        ref : 'categories'
    }],
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

const categoryModal = mongoose.model('sub_categories',categorySchema);

module.exports = categoryModal;