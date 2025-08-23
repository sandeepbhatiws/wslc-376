const express = require('express');
const { view } = require('../../controllers/admin/dashboard.controller');
const multer = require('multer')
const uploads = multer({ dest: 'uploads' })

const router = express.Router();

module.exports = server => {

    router.get('/', uploads.none(), view);

    server.use('/api/admin/dashboard', router);
}
