const colorModal = require("../../models/Color");

exports.create = async(request, response) => {

    const data = {
        name : request.body.name,
        code : request.body.code,
    }

    const inserData = new colorModal(data);
    await inserData.save()
    .then((result) => {
        const output = {
            _status : true,
            _message : 'Record Inserted !',
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

exports.view = async(request, response) => {

    if(request.body.name){
        var filter = {
            name : request.body.name
        }
    } else {
        var filter = {};
    }
    

    await colorModal.find(filter)
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
