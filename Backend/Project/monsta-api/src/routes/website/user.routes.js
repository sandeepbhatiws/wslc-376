const express = require('express');
const { register, login } = require('../../controllers/website/user.controller');
const multer = require('multer')
const uploads = multer({ dest: 'uploads/users' })
const path = require('path');

const router = express.Router();

module.exports = server => {

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/users')
        },
        filename: function (req, file, cb) {
            const uniqueValue = Date.now() + '-' + Math.round(Math.random() * 1E9)
            var imagePath = path.extname(file.originalname);
            cb(null, file.fieldname + '-' + uniqueValue + imagePath)
        }
    })

    const upload = multer({ storage: storage })

    const singleImage = upload.single('image');

    router.get('/register', upload.none(), register);

    router.get('/login', upload.none(), login);

    server.use('/api/website/users', router);
}
