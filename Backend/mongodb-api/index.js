const express = require('express');
const mongodb = require('mongodb');
const server = express(); // To Create Exucatable Function
const dbConnection = require('./dbConfig/databaseConnection.js');

// parse requests of content-type - application/json
server.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));

server.get('/',(request, response) => {
    response.end('Server is working fine !');
})

// server.get('/add-category', async(request, response) => {

//     const db = await dbConnection();  // Execuatble Function
//     const result = await db.collection('categories').insertOne({
//         name : 'Men'
//     });

//     const output = {
//         _status : true,
//         _message : 'Record created succussfully !',
//         _data : result
//     }

//     response.send(output);

// })


server.get('/add-category', async(request, response) => {

    const db = await dbConnection();  // Execuatble Function
    db.collection('categories').insertOne({
        name : request.query.category_name
    }).then((result) => {
        const output = {
            _status : true,
            _message : 'Record created succussfully !',
            _data : result
        }

        response.send(output);
    }).catch(() => {
        const output = {
            _status : false,
            _message : 'Something went wrong !',
            _data : null
        }

        response.send(output);
    })
})

server.get('/view-categories', async(request, response) => {

    const db = await dbConnection();

    db.collection('categories').find().toArray()
    .then((result) => {
        if(result.length > 0){
            const output = {
                _status : true,
                _message : 'Record fetch succussfully !',
                _data : result
            }

            response.send(output);
        } else {
            const output = {
                _status : false,
                _message : 'No record found !',
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

})

server.post('/api/add-material', async(request, response) => {
    const db = await dbConnection();  // Execuatble Function
    db.collection('materials').insertOne({
        name : request.body.name,
        order : request.body.order
    }).then((result) => {
        const output = {
            _status : true,
            _message : 'Record created succussfully !',
            _data : result
        }

        response.send(output);
    }).catch(() => {
        const output = {
            _status : false,
            _message : 'Something went wrong !',
            _data : null
        }

        response.send(output);
    })
})

server.post('/api/view-material', async(request, response) => {
    const db = await dbConnection();

    if(request.body.name){
        var filter = {
            name : request.body.name
        }
    } else {
        var filter = {};
    }

    db.collection('materials').find(filter).toArray()
    .then((result) => {
        if(result.length > 0){
            const output = {
                _status : true,
                _message : 'Record fetch succussfully !',
                _data : result
            }

            response.send(output);
        } else {
            const output = {
                _status : false,
                _message : 'No record found !',
                _data : result
            }

            response.send(output);
        }
    })
    .catch(() => {
        const output = {
            _status : false,
            _message : 'Something went wrong !',
            _data : []
        }

        response.send(output);
    })
})

server.put('/api/update-material/:id', async(request, response) => {
    const db = await dbConnection();  // Execuatble Function

    db.collection('materials').updateOne({
        _id : new mongodb.ObjectId(request.params.id)
    },{
        $set : {
            name : request.body.name,
            order : request.body.order
        }
    }).then((result) => {
        const output = {
            _status : true,
            _message : 'Record updated succussfully !',
            _data : result
        }

        response.send(output);
    }).catch(() => {
        const output = {
            _status : false,
            _message : 'Something went wrong !',
            _data : null
        }

        response.send(output);
    })
})

server.delete('/api/delete-material', async(request, response) => {
    const db = await dbConnection();  // Execuatble Function

    db.collection('materials').deleteOne({
        _id : new mongodb.ObjectId(request.body.id)
    }).then((result) => {
        const output = {
            _status : true,
            _message : 'Record delete succussfully !',
            _data : result
        }

        response.send(output);
    }).catch(() => {
        const output = {
            _status : false,
            _message : 'Something went wrong !',
            _data : null
        }

        response.send(output);
    })
})

server.listen(5000, () => {
    console.log('Server is working fine !');
})