const express = require('express');
const { orderPlaced, changeStatus } = require('../../controllers/website/order.controller');
const multer = require('multer')
const uploads = multer({ dest: 'uploads' })

const router = express.Router();

module.exports = server => {

    router.post('/order-placed', uploads.none(), orderPlaced);

    router.post('/change-status', uploads.none(), changeStatus);

    server.use('/api/website/orders', router);
}
