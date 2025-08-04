const express = require('express');
const { create, view, details, update, changeStatus, destroy, productDetails } = require('../../controllers/admin/product.controller');
const multer = require('multer')
const uploads = multer({ dest: 'uploads/products' })
const path = require('path');

const router = express.Router();

module.exports = server => {

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/products')
        },
        filename: function (req, file, cb) {
            const uniqueValue = Date.now() + '-' + Math.round(Math.random() * 1E9)
            var imagePath = path.extname(file.originalname);
            cb(null, file.fieldname + '-' + uniqueValue + imagePath)
        }
    })

    const upload = multer({ storage: storage })
    const singleMultiple = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'images', maxCount: 8 }])

    router.post('/create', singleMultiple, create);

    router.post('/view', upload.none(), view);

    router.post('/details', upload.none(), details);

    router.post('/product-details', upload.none(), productDetails);

    router.put('/update/:id', singleMultiple, update);

    router.put('/change-status', upload.none(), changeStatus);

    router.put('/delete', upload.none(), destroy);

    server.use('/api/admin/products', router);
}
