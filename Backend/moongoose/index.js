const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();  // Exucatable Funtions


// Call it first before calling routes
// parse requests of content-type - application/json
server.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));

server.use(bodyParser.json());
server.use(cors());

server.get('/', (request, response) => {
    response.send('Server is working fine!');
})


// Admin API URLS
require('./src/routes/admin/color.routes.js')(server);


// Website API URL


server.listen(8000, () => {
    mongoose.connect('mongodb://127.0.0.1:27017/mongoose_376')
    .then(() => console.log('Connected!'))
    .catch((error) => {
        console.log(error);
    });
})