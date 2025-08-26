const order = require('../../models/Order');
require('dotenv').config()
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const saltRounds = 10;
const nodemailer = require("nodemailer");
const Razorpay = require('razorpay');

var instance = new Razorpay({
  key_id: 'rzp_test_ec6hXLcRpGHpLM',
  key_secret: 'zzCrOmFy4BnlqiRoBnqDWEEn',
});

//Order Placed API
exports.orderPlaced = async(request, response) => {
    var token = request.headers.authorization;

    if (!token) {
        return response.send({
            _status: false,
            _message: 'No token provided',
            _data: null
        });
    }

    var token = token.split(' ')[1]; // Remove 'Bearer ' prefix if present

    try {
        var decoded = jwt.verify(token, process.env.KEY_VALUE);

        var totalOrders = await order.find().countDocuments();

        const data = request.body;
        data.user_id = decoded.userData._id;
        data.order_number = 'MONSTA_00'+(totalOrders+1)

        try {
            const inserData = new order(data);
            await inserData.save()
            .then(async(result) => {

                var orderInfo = await instance.orders.create({
                    "amount": request.body.net_amount*100,
                    "currency": "INR",
                    "receipt": result._id,
                    "partial_payment": false,
                })

                await order.updateOne({
                    _id : result._id
                }, {
                    $set : {
                        order_id : orderInfo.id
                    }
                })

                var orderData = await order.findById(result._id);

                const output = {
                    _status : true,
                    _message : 'Order Placed !',
                    orderInfo : orderInfo,
                    _data : orderData
                }

                response.send(output);
            })
            .catch((error) => {

                console.log(error);

                var errorMessages = [];

                for(err in error.errors){
                    errorMessages.push(error.errors[err].message);
                }

                const output = {
                    _status : false,
                    _message : 'Something went wrong !',
                    _data : null,
                    _error_messages : error
                }

                response.send(output);
            })
        } catch (error) {
            const output = {
                _status : false,
                _message : 'Something went wrong !',
                _data : error
            }

            response.send(output);
        }
        
    } catch (error) {  
        return response.send({
            _status: false,
            _message: 'Failed to authenticate token',
            _data: error
        });
    }
};

// Change Status API
exports.changeStatus = async(request, response) => {


//     razorpay_payment_id
// : 
// "pay_RA0hz9iBtoDQja"


    var token = request.headers.authorization;

    if (!token) {
        return response.send({
            _status: false,
            _message: 'No token provided',
            _data: null
        });
    }

    var token = token.split(' ')[1]; // Remove 'Bearer ' prefix if present

    try {
        var decoded = jwt.verify(token, process.env.KEY_VALUE);

        var userData = await user.findOne({ _id: decoded.userData._id, role_type : 'User' });
        
        if (!userData) {
            return response.send({  
                _status: false,
                _message: 'User not found',
                _data: null
            });
        }   

        // // Update user data
        // userData.name = request.body.name || userData.name;
        // userData.email = request.body.email || userData.email;
        // userData.mobile_number = request.body.mobile_number || userData.mobile_number;

        const updateData= request.body;

        if(request.file){
            updateData.image = request.file.filename;
        }

       var userData = await user.updateOne({
            _id : decoded.userData._id
        },{
            $set : updateData
        });

        const output = {
            _status: true,
            _message: 'Profile updated successfully',
            _data: userData
        };

        response.send(output);
    } catch (error) {  
        return response.send({
            _status: false,
            _message: 'Failed to authenticate token',
            _data: null
        });
    }
};