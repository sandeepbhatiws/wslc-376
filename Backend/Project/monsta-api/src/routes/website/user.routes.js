const express = require('express');
const { register, login, viewProfile, updateProfile, changePassword } = require('../../controllers/website/user.controller');
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

    router.post('/register', upload.none(), register);

    router.post('/login', upload.none(), login);

    router.post('/view-profile', upload.none(), viewProfile);

    router.post('/update-profile', singleImage, updateProfile);

    router.post('/change-password', upload.none(), changePassword);

    server.use('/api/website/users', router);
}
