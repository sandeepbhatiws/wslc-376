const productModal = require("../../models/Product");
const Category = require("../../models/Category");
const SubCategory = require("../../models/SubCategory");
require('dotenv').config()
var slugify = require('slugify');

const generateUniqueSlug = async(modal, slug) => {
    let actualSlug = slug;
    let count = 0;

    while(await modal.findOne({slug : actualSlug})){
        count++;
        actualSlug = `${slug}-${count}`
    }

    return actualSlug;
}

exports.create = async(request, response) => {

    const saveData = request.body;

    var slug = slugify(request.body.name, {
        lower: true,
        strict: true,
        trim: true
    });

    saveData.slug = await generateUniqueSlug(productModal, slug);

    if(request.files && request.files.image){
        saveData.image = request.files.image[0].filename;
    }

    if(request.files && request.files.images){
        saveData.images = request.files.images.map(file => file.filename);
    }

    try {
        const inserData = new productModal(saveData);
        await inserData.save()
        .then(async(result) => {

            if(request.body.parent_category_ids != undefined && request.body.parent_category_ids != ''){
                await Category.updateMany({
                    _id : request.body.parent_category_ids
                },
                { 
                    $push: { 
                        product_ids: { 
                            $each: [result._id] 
                        } 
                    } 
                })
            }

            if(request.body.sub_category_ids != undefined && request.body.sub_category_ids != ''){
                await SubCategory.updateMany({
                    _id : request.body.sub_category_ids
                },
                { 
                    $push: { 
                        product_ids: { 
                            $each: [result._id] 
                        } 
                    } 
                })
            }

            const output = {
                _status : true,
                _message : 'Record Inserted !',
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
}

exports.view = async(request, response) => {

    // Start pagination
    var current_page = 1;
    var limit = 10;
    var skip = (current_page - 1) * limit;

    if(request.body != undefined){
        var current_page = request.body.page ? request.body.page : current_page;
        var limit  = request.body.limit ? request.body.limit : limit;
        var skip = (current_page - 1) * limit;
    }
    // Ending


    // Start
    const addCondition = [
        {
            deleted_at : null, 
        }
    ];

    const orCondition = [];

    if(request.body != undefined){
        if(request.body.name != undefined){
            if(request.body.name != ''){
                var name = new RegExp(request.body.name,"i");
                orCondition.push({ name : name })
            }
        }

        if(request.body.parent_category_id != undefined){
            if(request.body.parent_category_id != ''){
                addCondition.push({ parent_category_ids : request.body.parent_category_id })
            }
        }
    }

    if(addCondition.length > 0){
        var filter = { $and : addCondition }
    } else {
        var filter = {}
    }

    if(orCondition.length > 0){
        filter.$or = orCondition;
    }
    // End

    var totalRecords = await productModal.find(filter).countDocuments();
    var total_pages = Math.ceil(totalRecords / limit);

    await productModal.find(filter)
    .populate('color_ids', 'name')
    .populate('parent_category_ids', 'name')  
    .populate('sub_category_ids', 'name') 
    .skip(skip).limit(limit)
    .sort({
        _id : 'desc'
    })
    .then((result) => {
        if(result.length > 0){
            const output = {
                _status : true,
                _message : 'Record fetched !',
                _pagination : {
                    current_page : current_page,
                    total_pages : total_pages,
                    total_records : totalRecords,
                },
                _image_path : process.env.product_image,
                _data : result
            }

            response.send(output);
        } else {
            const output = {
                _status : false,
                _message : 'No Record Found !',
                _data : result
            }

            response.send(output);
        }
    })
    .catch(() => {
        const output = {
            _status : false,
            _message : 'Something went wrong !',
            _data : null
        }

        response.send(output);
    })
}

exports.details = async(request, response) => {

    await productModal.findById(request.body.id)
    .then((result) => {
        if(result){
            const output = {
                _status : true,
                _message : 'Record fetched !',
                _image_path : process.env.product_image,
                _data : result
            }

            response.send(output);
        } else {
            const output = {
                _status : false,
                _message : 'No Record Found !',
                _data : result
            }

            response.send(output);
        }
    })
    .catch(() => {
        const output = {
            _status : false,
            _message : 'Something went wrong !',
            _data : null
        }

        response.send(output);
    })
}

exports.productDetails = async(request, response) => {

    await productModal.findById(request.body.id)
    .populate('color_ids', 'name')
    .populate('parent_category_ids', 'name')
    .populate('sub_category_ids', 'name')
    .then((result) => {
        if(result){
            const output = {
                _status : true,
                _message : 'Record fetched !',
                _image_path : process.env.product_image,
                _data : result
            }

            response.send(output);
        } else {
            const output = {
                _status : false,
                _message : 'No Record Found !',
                _data : result
            }

            response.send(output);
        }
    })
    .catch(() => {
        const output = {
            _status : false,
            _message : 'Something went wrong !',
            _data : null
        }

        response.send(output);
    })
}

exports.update = async(request, response) => {

    const saveData = request.body;

    var slug = slugify(request.body.name, {
        lower: true,
        strict: true,
        trim: true
    });

    saveData.slug = await generateUniqueSlug(productModal, slug);

    if(request.files && request.files.image){
        saveData.image = request.files.image[0].filename;
    }

    if(request.files && request.files.images){
        saveData.images = request.files.images.map(file => file.filename);
    }

    await productModal.updateOne({
        _id : request.params.id
    },{
        $set : saveData
    })
    .then(async(result) => {

        if(request.body.parent_category_ids != undefined && request.body.parent_category_ids != ''){
                await Category.updateMany({
                    _id : request.body.parent_category_ids
                },
                { 
                    $push: { 
                        product_ids: { 
                            $each: [result._id] 
                        } 
                    } 
                })
            }

            if(request.body.sub_category_ids != undefined && request.body.sub_category_ids != ''){
                await SubCategory.updateMany({
                    _id : request.body.sub_category_ids
                },
                { 
                    $push: { 
                        product_ids: { 
                            $each: [result._id] 
                        } 
                    } 
                })
            }


        const output = {
            _status : true,
            _message : 'Record Updated !',
            _data : result
        }

        response.send(output);
    })
    .catch((error) => {
        console.log(error)
        const output = {
            _status : false,
            _message : 'Something went wrong !',
            _data : null
        }

        response.send(output);
    })
}

exports.changeStatus = async(request, response) => {
    await productModal.updateMany({
        _id : {
            $in : request.body.id
        }
    },[
        {
            $set: {
                status: { $not: "$status" }
            }
        }
    ])
    .then((result) => {
        const output = {
            _status : true,
            _message : 'Change Status successfully !',
            _data : result
        }

        response.send(output);
    })
    .catch((error) => {
        const output = {
            _status : false,
            _message : 'Something went wrong !',
            _data : error
        }

        response.send(output);
    })
}

exports.destroy = async(request, response) => {
    await productModal.updateMany({
        _id : {
            $in : request.body.id
        }
    },{
        $set : {
            deleted_at : Date.now()
        }
    })
    .then((result) => {
        const output = {
            _status : true,
            _message : 'Record Deleted !',
            _data : result
        }

        response.send(output);
    })
    .catch(() => {
        const output = {
            _status : false,
            _message : 'Something went wrong !',
            _data : null
        }

        response.send(output);
    })
}
