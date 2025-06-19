var api_key = '04c35731a5ee918f014970082a0088b1';

exports.validation = ((request, response, next) => {
    if(request.query.api_key == undefined || request.query.api_key == ''){
        const result = {
            '_status' : false,    // either true or false
            '_message' : 'Invalid key !',
            '_data' : []
        }

        response.send(result);
    } else if(request.query.api_key != api_key){
        
        const result = {
            '_status' : false,    // either true or false
            '_message' : 'Invalid key !',
            '_data' : []
        }

        response.send(result);
    } else {
        next();
    }
})