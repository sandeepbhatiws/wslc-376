const user = require('../../models/user');
require('dotenv').config()
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const saltRounds = 10;
const nodemailer = require("nodemailer");

//Register API
exports.register = async(request, response) => {

    var existingUser = await user.findOne({ email : request.body.email, deleted_at: '', role_type : 'Admin' });

    if(existingUser){
        const output = {
            _status: false,
            _message: 'Email already exists!',
            _data: null
        }
        return response.send(output);
    }

    const data = {
        name: request.body.name,
        email: request.body.email, 
        password: await bcrypt.hash(request.body.password, saltRounds),
        mobile_number: request.body.mobile_number,
        role_type : 'Admin'
    }

    try {
        const inserData = new user(data);
        await inserData.save()
        .then((result) => {

            var token = jwt.sign({ userData : result }, process.env.KEY_VALUE);

            const output = {
                _status : true,
                _message : 'User Registered !',
                _token : token,
                _data : result
            }

            response.send(output);
        })
        .catch((error) => {

            var errorMessages = [];

            for(err in error.errors){
                errorMessages.push(error.errors[err].message);
            }

            const output = {
                _status : false,
                _message : 'Something went wrong !',
                _data : null,
                _error_messages : errorMessages
            }

            response.send(output);
        })
    } catch (error) {
        const output = {
            _status : false,
            _message : 'Something went wrong !',
            _data : null
        }

        response.send(output);
    }
};

//Login API
exports.login = async(request, response) => {

    var existingUser = await user.findOne({ email : request.body.email, deleted_at: '', role_type : 'Admin' });

    if(!existingUser){
        const output = {
            _status: false,
            _message: 'Invalid email id',
            _data: null
        }
        return response.send(output);
    }

    if(await bcrypt.compare(request.body.password, existingUser.password)) {
        var token = jwt.sign({ userData : existingUser }, process.env.KEY_VALUE);

        if(existingUser.status == false){
            const output = {
                _status: false,
                _message: 'Your account is deactivated. Please contact support.',
                _data: null 
            }
            return response.send(output);   
        }

        const output = {
            _status : true,
            _message : 'Login successful !',
            _token : token,
            _data : existingUser
        }

        response.send(output);
    } else {
        const output = {
            _status: false,
            _message: 'Invalid password',
            _data: null
        }
        response.send(output);
    }
};

// View Profile API
exports.viewProfile = async(request, response) => {

    var token = request.headers.authorization;

    if (!token) {
        return response.status(401).send({
            _status: false,
            _message: 'No token provided',
            _data: null
        });
    }

    var token = token.split(' ')[1]; // Remove 'Bearer ' prefix if present

    try {
        var decoded = jwt.verify(token, process.env.KEY_VALUE);

        var userData = await user.findOne({ _id: decoded.userData._id, role_type : 'Admin' });  
        
        if (!userData) {
            return response.send({  
                _status: false,
                _message: 'User not found',
                _data: null
            });
        }   

        const output = {
            _status: true,
            _message: 'Profile fetched successfully',
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

// Update Profile API
exports.updateProfile = async(request, response) => {
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

        var userData = await user.findOne({ _id: decoded.userData._id, role_type : 'Admin' });
        
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

// Change Password API
exports.changePassword = async(request, response) => {
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

        var userData = await user.findOne({ _id: decoded.userData._id, role_type : 'Admin' });
        
        if (!userData) {
            return response.send({  
                _status: false,
                _message: 'User not found',
                _data: null
            });
        }   

        var verifyPassword = await bcrypt.compare(request.body.current_password, userData.password);
        if(!verifyPassword) {
            return response.send({
                _status: false,
                _message: 'Current password is incorrect',
                _data: null
            });
        }

        if(request.body.current_password === request.body.new_password) {
            return response.send({  
                _status: false,
                _message: 'New password cannot be the same as current password',   
                _data: null
            }); 
        }

        if(request.body.new_password != request.body.confirm_password) {
            return response.send({  
                _status: false,
                _message: 'New password and confirm password must be same',   
                _data: null
            }); 
        }
        
        var password = await bcrypt.hash(request.body.new_password, saltRounds);

        var userData = await user.updateOne({
            _id : decoded.userData._id
        },{
            $set : {
                password: password
            }
        });

        const output = {
            _status: true,
            _message: 'Change Password successfully',
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

// Forgot Password API
exports.forgotPassword = async(request, response) => {
    var existingUser = await user.findOne({ email : request.body.email, deleted_at: '',role_type: 'Admin' });
    if(!existingUser){
        return response.send({
            _status: false,
            _message: 'Email not found',
            _data: null
        });
    }

    // Generate a random token
    var token = jwt.sign({ userData: existingUser }, process.env.KEY_VALUE, {
        expiresIn: '1h' // Token valid for 1 hour
    });

    // Create a transporter for sending emails 
    var transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email service
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS  // Your email password
        }
    });

    // Email options
    var mailOptions = {
        from: 'Node Project <'+process.env.EMAIL_USER+'>', // Sender address
        to: existingUser.email, // Recipient address
        subject: 'Password Reset Request',
        text: `You requested a password reset. Click the link below to reset your password:\n\nhttp://localhost:3000/reset-password?token=${token}`
    };

    // Send the email
    await transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return response.send({ 
                _status: false,
                _message: 'Error sending email',
                _data: error
            });
        } else {
            return response.send({  
                _status: true,
                _message: 'Password reset email sent successfully',
                _data: null
            });
        }           
    });
};

// Reset Password API
exports.resetPassword = async(request, response) => {
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

        var userData = await user.findOne({ _id: decoded.userData._id, role_type : 'Admin' });
        
        if (!userData) {
            return response.send({  
                _status: false,
                _message: 'User not found',
                _data: null
            });
        }

        if(request.body.new_password != request.body.confirm_password) {
            return response.send({  
                _status: false,
                _message: 'New password and confirm password must be same',   
                _data: null
            }); 
        }
        
        var password = await bcrypt.hash(request.body.new_password, saltRounds);

        var userData = await user.updateOne({
            _id : decoded.userData._id
        },{
            $set : {
                password: password
            }
        });

        const output = {
            _status: true,
            _message: 'Reset Password successfully',
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