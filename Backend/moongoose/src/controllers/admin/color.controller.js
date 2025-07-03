const colorModal = require("../../models/Color");

exports.create = async(request, response) => {

    try {

        // const data = {
        //     name : request.body.name,
        //     code : request.body.code,
        //     order : request.body.order,
        // }
        const inserData = new colorModal(request.body);
        await inserData.save()
        .then((result) => {
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

            console.log(error)

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

    // if(request.body.name){
    //     // var filter = {
    //     //     name : request.body.name
    //     // }

    // } else {
    //     var filter = {};
    // }

    var filter = {};

    // var filter = {
    //     order : {
    //         $gte : 5
    //     }
    // }

    // var filter = {
    //     order : {
    //         $lte : 5
    //     }
    // }

    await colorModal.find(filter).sort({ name : 'desc'}).limit(2).skip(2)
    .then((result) => {
        if(result.length > 0){
            const output = {
                _status : true,
                _message : 'Record fetched !',
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
    // await colorModal.findOne({
    //     _id : request.body.id
    // })

    await colorModal.findById(request.body.id)
    .then((result) => {
        if(result){
            const output = {
                _status : true,
                _message : 'Record fetched !',
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

    const data = {
        name : request.body.name,
        code : request.body.code,
    }

    await colorModal.updateOne({
        _id : request.body.id
    },{
        $set : data
    })
    .then((result) => {
        const output = {
            _status : true,
            _message : 'Record Updated !',
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

exports.changeStatus = (request, response) => {

}

exports.destroy = async(request, response) => {
    await colorModal.deleteOne({
        _id : request.body.id
    })
    .then((result) => {
        const output = {
            _status : true,
            _message : 'Record deleted !',
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
