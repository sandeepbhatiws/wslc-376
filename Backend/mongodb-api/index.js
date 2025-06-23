const express = require('express');
const mongodb = require('mongodb');
const server = express(); // To Create Exucatable Function
const dbConnection = require('./dbConfig/databaseConnection.js');

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

server.listen(5000, () => {
    console.log('Server is working fine !');
})