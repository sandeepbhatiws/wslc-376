const http = require('http');
const { categories, products, productDetails } = require('./data');

// http.createServer((request,resp) => {
//     console.log('Hello World');
//     resp.end('Welcome to Ws Cube Tech')
// }).listen(3000);


const server = http.createServer((request, response) => {
    // console.log(request.url);
    // console.log(request.method);
    // response.end('<h1>Welcome to Ws Cube Tech</h1>')

    if(request.url == '/'){
        response.end('Server Started.');
    } else if(request.url == '/add-category'){
        
        const result = {
            '_status' : true,    // either true or false
            '_message' : 'Category Add Successfully !',
            '_data' : 'Data Here'
        }

        response.end(JSON.stringify(result));

    } else if(request.url == '/view-categories' && request.method == 'POST'){

        if(categories.length > 0){
            const result = {
                '_status' : true,    // either true or false
                '_message' : 'Record founds !',
                '_data' : categories
            }
            response.end(JSON.stringify(result));
        } else {
            const result = {
                '_status' : false,    // either true or false
                '_message' : 'No Record founds !',
                '_data' : categories
            }
            response.end(JSON.stringify(result));
        }

    } else if(request.url == '/view-products'){

        if(products.length > 0){
            const result = {
                '_status' : true,    // either true or false
                '_message' : 'Record founds !',
                '_data' : products
            }
            response.end(JSON.stringify(result));
        } else {
            const result = {
                '_status' : false,    // either true or false
                '_message' : 'No Record founds !',
                '_data' : products
            }
            response.end(JSON.stringify(result));
        }

    } else if(request.url == '/product-details'){

        if(productDetails){
            const result = {
                '_status' : true,    // either true or false
                '_message' : 'Record founds !',
                '_data' : productDetails
            }
            response.end(JSON.stringify(result));
        } else {
            const result = {
                '_status' : false,    // either true or false
                '_message' : 'No Record founds !',
                '_data' : productDetails
            }
            response.end(JSON.stringify(result));
        }

    } else {
        response.end('404 Not Found !');
    }
});

server.listen(8000, () => {
    console.log('Server is working Fine !');
});