require('dotenv').config()
var jwt = require('jsonwebtoken');

exports.register = (request, response) => {

    var token = jwt.sign({ userData : 'Welcome to WS' }, process.env.KEY_VALUE, {
        expiresIn: '10000' // expires in 1 hour
    });

    const output = {
        _status : true,
        _message : 'Register User !',
        _data : token
    }

    response.send(output);
};

exports.login = (request, response) => {

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6IldlbGNvbWUgdG8gV1MiLCJpYXQiOjE3NTQ2NjQ0NjAsImV4cCI6MTc1NDY2NDQ3MH0.TgOQ9QDTBrnUd5GbblyFOFpokuyprQuiL44HLyicvdU';

    var verify = jwt.verify(token, process.env.KEY_VALUE);

    const output = {
        _status : true,
        _message : 'Login User !',
        _data : verify
    }

    response.send(output);
};





// const categoryModal = require("../../models/Category");

// var slugify = require('slugify');

// const generateUniqueSlug = async(modal, slug) => {
//     let actualSlug = slug;
//     let count = 0;

//     while(await modal.findOne({slug : actualSlug})){
//         count++;
//         actualSlug = `${slug}-${count}`
//     }

//     return actualSlug;
// }


// // const generateUniqueSlug = async (Model, baseSlug) => {
// //     let slug = baseSlug;
// //     let count = 0;
  
// //     // Loop to find unique slug
// //     while (await Model.findOne({ slug })) {
// //       count++;
// //       slug = `${baseSlug}-${count}`;
// //     }
  
// //     return slug;
// // };

// exports.create = async(request, response) => {

//     const saveData = request.body;

//     var slug = slugify(request.body.name, {
//         replacement: '-',  // replace spaces with replacement character, defaults to `-`
//         remove: undefined, // remove characters that match regex, defaults to `undefined`
//         lower: true,      // convert to lower case, defaults to `false`
//         strict: true,     // strip special characters except replacement, defaults to `false`
//         locale: 'vi',      // language code of the locale to use
//         trim: true         // trim leading and trailing replacement chars, defaults to `true`
//     });

//     saveData.slug = await generateUniqueSlug(categoryModal, slug);

//     if(request.file){
//         saveData.image = request.file.filename;
//     }

//     try {
//         const inserData = new categoryModal(saveData);
//         await inserData.save()
//         .then((result) => {
//             const output = {
//                 _status : true,
//                 _message : 'Record Inserted !',
//                 _data : result
//             }

//             response.send(output);
//         })
//         .catch((error) => {

//             var errorMessages = [];

//             for(err in error.errors){
//                 errorMessages.push(error.errors[err].message);
//             }

//             const output = {
//                 _status : false,
//                 _message : 'Something went wrong !',
//                 _data : null,
//                 _error_messages : errorMessages
//             }

//             response.send(output);
//         })
//     } catch (error) {
//         const output = {
//             _status : false,
//             _message : 'Something went wrong !',
//             _data : null
//         }

//         response.send(output);
//     }
// }

// exports.view = async(request, response) => {

//     // Start pagination
//     var current_page = 1;
//     var limit = 10;
//     var skip = (current_page - 1) * limit;

//     if(request.body != undefined){
//         var current_page = request.body.page ? request.body.page : current_page;
//         var limit  = request.body.limit ? request.body.limit : limit;
//         var skip = (current_page - 1) * limit;
//     }
//     // Ending


//     // Start
//     const addCondition = [
//         {
//             deleted_at : null, 
//         }
//     ];

//     const orCondition = [];

//     if(request.body != undefined){
//         if(request.body.name != undefined){
//             if(request.body.name != ''){
//                 var name = new RegExp(request.body.name,"i");
//                 orCondition.push({ name : name })
//             }
//         }
//     }

//     if(addCondition.length > 0){
//         var filter = { $and : addCondition }
//     } else {
//         var filter = {}
//     }

//     if(orCondition.length > 0){
//         filter.$or = orCondition;
//     }
//     // End

//     var totalRecords = await categoryModal.find(filter).countDocuments();
//     var total_pages = Math.ceil(totalRecords / limit);

//     await categoryModal.find(filter)
//     .skip(skip).limit(limit)
//     .sort({
//         _id : 'desc'
//     })
//     .then((result) => {
//         if(result.length > 0){
//             const output = {
//                 _status : true,
//                 _message : 'Record fetched !',
//                 _pagination : {
//                     current_page : current_page,
//                     total_pages : total_pages,
//                     total_records : totalRecords,
//                 },
//                 _image_path : process.env.category_image,
//                 _data : result
//             }

//             response.send(output);
//         } else {
//             const output = {
//                 _status : false,
//                 _message : 'No Record Found !',
//                 _data : result
//             }

//             response.send(output);
//         }
//     })
//     .catch(() => {
//         const output = {
//             _status : false,
//             _message : 'Something went wrong !',
//             _data : null
//         }

//         response.send(output);
//     })
// }

// exports.details = async(request, response) => {

//     await categoryModal.findById(request.body.id)
//     .then((result) => {
//         if(result){
//             const output = {
//                 _status : true,
//                 _message : 'Record fetched !',
//                 _image_path : process.env.category_image,
//                 _data : result
//             }

//             response.send(output);
//         } else {
//             const output = {
//                 _status : false,
//                 _message : 'No Record Found !',
//                 _data : result
//             }

//             response.send(output);
//         }
//     })
//     .catch(() => {
//         const output = {
//             _status : false,
//             _message : 'Something went wrong !',
//             _data : null
//         }

//         response.send(output);
//     })
// }

// exports.update = async(request, response) => {

//     const saveData = request.body;

//     if(request.file){
//         saveData.image = request.file.filename;
//     }

//     await categoryModal.updateOne({
//         _id : request.params.id
//     },{
//         $set : saveData
//     })
//     .then((result) => {
//         const output = {
//             _status : true,
//             _message : 'Record Updated !',
//             _data : result
//         }

//         response.send(output);
//     })
//     .catch(() => {
//         const output = {
//             _status : false,
//             _message : 'Something went wrong !',
//             _data : null
//         }

//         response.send(output);
//     })
// }

// exports.changeStatus = async(request, response) => {
//     await categoryModal.updateMany({
//         _id : {
//             $in : request.body.id
//         }
//     },[
//         {
//             $set: {
//                 status: { $not: "$status" }
//             }
//         }
//     ])
//     .then((result) => {
//         const output = {
//             _status : true,
//             _message : 'Change Status successfully !',
//             _data : result
//         }

//         response.send(output);
//     })
//     .catch((error) => {
//         const output = {
//             _status : false,
//             _message : 'Something went wrong !',
//             _data : error
//         }

//         response.send(output);
//     })
// }

// exports.destroy = async(request, response) => {
//     await categoryModal.updateMany({
//         _id : {
//             $in : request.body.id
//         }
//     },{
//         $set : {
//             deleted_at : Date.now()
//         }
//     })
//     .then((result) => {
//         const output = {
//             _status : true,
//             _message : 'Record Deleted !',
//             _data : result
//         }

//         response.send(output);
//     })
//     .catch(() => {
//         const output = {
//             _status : false,
//             _message : 'Something went wrong !',
//             _data : null
//         }

//         response.send(output);
//     })
// }
