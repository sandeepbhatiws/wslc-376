const colorModal = require("../../models/Color");

exports.create = async(request, response) => {

    try {
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

    var condition = {
        deleted_at : null
    };

    await colorModal.find(condition)
    .sort({
        order : 'asc'
    })
    .sort({
        _id : 'desc'
    })
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

    await colorModal.updateOne({
        _id : request.params.id
    },{
        $set : request.body
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

exports.changeStatus = async(request, response) => {
    await colorModal.updateMany({
        _id : {
            $in : request.body.id
        }
    },{
        $set : {
            status : {
                $not : "$status"
            }
        }
    })
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
    await colorModal.updateMany({
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


    // await colorModal.deleteOne({
    //     _id : request.body.id
    // })
    // .then((result) => {
    //     const output = {
    //         _status : true,
    //         _message : 'Record deleted !',
    //         _data : result
    //     }

    //     response.send(output);
    // })
    // .catch(() => {
    //     const output = {
    //         _status : false,
    //         _message : 'Something went wrong !',
    //         _data : null
    //     }

    //     response.send(output);
    // })
}
