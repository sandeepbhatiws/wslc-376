const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user_id : {
        type : String,
        required : [true, 'User Id is required'],
        ref : 'users'
    },
    order_id : {
        type : String,
        default : '',
    },
    order_number : {
        type : String,
        default : '',
    },
    order_date : {
        type : Date,
        default : Date.now()
    },
    shipping_address : {
        type : String,
        default : '',
    },
    billing_address : {
        type : String,
        default : '',
    },
    product_info : {
        type : Array,
        default : [],
    },
    total_amount :{
        type : Number,
        default: 0
    },
    discount_amount :{
        type : Number,
        default: 0
    },
    net_amount :{
        type : Number,
        default: 0
    },
    payment_status : {
        type : Number,
        default : 1  // 1- Pending 2 - Success 3- Failed
    },
    order_status : {
        type : Number,
        default : 1 // 1 - In Process 2- Order Placed 3 - Cancelled 4 - Order Received 5 - Ready to Ship  6 - Shipped 7 - Ready to Dispatch 8 - Order Received
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

const orderModal = mongoose.model('orders',orderSchema);

module.exports = orderModal;