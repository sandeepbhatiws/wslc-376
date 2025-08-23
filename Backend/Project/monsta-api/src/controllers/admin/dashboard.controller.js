const productModal = require("../../models/Product");
require('dotenv').config()

exports.view = async(request, response) => {

    // Start
    const addCondition = [
        {
            deleted_at : null, 
        }
    ];

    const orCondition = [];

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

    var totalProducts = await productModal.aggregate([
        { $match: filter },
        { $count: 'total_products' }
    ]);

    var allProductCalculation = await productModal.aggregate([
        { $match: filter },
        {
            $group : {
                _id : '',
                minPrice : { $min : '$sale_price' },
                maxPrice : { $max : '$sale_price' },
                total : { $sum : '$sale_price' },
                avgPrice : { $avg : '$sale_price' }
            }
        }
    ])
    
    const output = {
        _status : true,
        _message : 'Record fetched !',
        totalRecords : totalRecords,
        totalProducts : totalProducts,
        allProductCalculation : allProductCalculation
    }

    response.send(output);
}