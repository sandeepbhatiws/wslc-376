const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required'],
        match: /^[a-zA-Z ]{2,15}$/,
        // validate: {
        //     validator: async function(v) {
        //         const name = await this.constructor.findOne({ name: v });
        //         return !name;
        //     },
        //     message: props => `The specified name is already in use.`
        // },
    },
    image : {
        type : String,
        default : '',
    },
    images : {
        type : Array,
        default : [],
    },
    slug : {
        type : String,
        default : '',
    },
    actual_price : {
        type : Number,
        required : [true, 'Actual price is required'],
        min : [0, 'Minimum value must be greather than 0'],
        max : [100000, 'Maximum value must be less than 100000'],
    },
    sale_price : {
        type : Number,
        required : [true, 'Sale price is required'],
        min : [0, 'Minimum value must be greather than 0'],
        max : [100000, 'Maximum value must be less than 100000'],
    },
    // product_type : {
    //     type : Number,
    //     required : [true, 'Product type is required'],
    //     default: 1 // 1 - Featured, 2- New Arrival, 3 - OnSale
    // },
    is_featured : {
        type : Boolean,
        default : false,
    },
    is_new_arrival : {
        type : Boolean,
        default : false,
    },
    is_on_sale : {
        type : Boolean,
        default : false,
    },
    is_best_selling : {
        type : Boolean,
        default : false,  // 1 - Yes 0 - No
    },
    is_up_sell : {
        type : Boolean,
        default : false,
    },
    short_description : {
        type : String,
        required : [true, 'Short description is required'],
    },
    long_description : {
        type : String,
        required : [true, 'Long description is required'],
    },
    product_code : {
        type : String,
        required : [true, 'Product code is required'],
        match: /^[a-zA-Z 0-9]{2,15}$/,  
        minLength : [3, 'Minumum length must be 3 charater'],
        maxLength : [15, 'maximum length must be 15 charater'],
    },
    stocks : {
        type : Number,
        required : [true, 'Stock is required'],
        min : [0, 'Minimum value must be greather than 0'],
        max : [100000, 'Maximum value must be less than 100000'],
    },
    product_dimension : {
        type : String,
        // required : [true, 'Product dimension is required'],
        default : '',
    },
    estimate_delivery_days : {
        type : String,
        required : [true, 'Estimate delivery days is required'],
        default : '',
    },
    material_ids : [{
        type : String,
        // required : [true, 'Parent Category is required'],
        ref : 'materials',
        default : []
    }],
    color_ids : [{
        type : String,
        // required : [true, 'Parent Category is required'],
        ref : 'colors',
        default : []
    }],
    parent_category_ids : [{
        type : String,
        // required : [true, 'Parent Category is required'],
        ref : 'categories',
        default : []
    }],
    sub_category_ids : [{
        type : String,
        // required : [true, 'Parent Category is required'],
        ref : 'sub_categories',
        default : []
    }],
    sub_sub_category_ids : [{
        type : String,
        // required : [true, 'Parent Category is required'],
        ref : 'sub_sub_categories',
        default : []
    }],
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

const productModal = mongoose.model('products',productSchema);

module.exports = productModal;