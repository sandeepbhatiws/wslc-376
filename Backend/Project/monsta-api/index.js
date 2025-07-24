const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();  // Exucatable Funtions
require('dotenv').config()

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

server.use('/uploads/categories', express.static('uploads/categories'));
server.use('/uploads/products', express.static('uploads/products'));


// Admin API URLS
require('./src/routes/admin/color.routes.js')(server);
require('./src/routes/admin/material.routes.js')(server);
require('./src/routes/admin/categories.routes.js')(server);


// Website API URL


server.listen(process.env.PORT, () => {
    mongoose.connect(process.env.DB)
    .then(() => console.log('Connected!'))
    .catch((error) => {
        console.log(error);
    });
})