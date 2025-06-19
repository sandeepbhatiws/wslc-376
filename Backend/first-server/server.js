const express = require('express');
const { categories, products } = require('./data');
const { validation } = require('./middleware');
const app = express(); // To make it exucatable.

const route = express.Router();
route.use(validation);

app.get('/', (request, response) => {
    response.send('Welcome to WsCube Tech');
});

route.get('/view-categories', (request, response) => {

    if(categories.length > 0){
        const result = {
            '_status' : true,    // either true or false
            '_message' : 'Record founds !',
            '_data' : categories
        }

        response.send(result);
    } else {
        const result = {
            '_status' : false,    // either true or false
            '_message' : 'No Record founds !',
            '_data' : categories
        }

        response.send(result);
    }
    
});

app.post('/view-products', (request, response) => {
    if(products.length > 0){
        const result = {
            '_status' : true,    // either true or false
            '_message' : 'Record founds !',
            '_data' : products
        }

        response.send(result);
    } else {
        const result = {
            '_status' : false,    // either true or false
            '_message' : 'No Record founds !',
            '_data' : products
        }

        response.send(result);
    }

    
});

// app.get('*', (request, response) => {
//     response.send('404 API not found');
// });

app.use('/',route);

app.listen(8000, () => {
    console.log('Server is working Fine !');
});