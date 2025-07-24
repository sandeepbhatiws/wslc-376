const express = require('express');
const { create, view, details, update, changeStatus, destroy } = require('../../controllers/admin/material.controller');

const router = express.Router();

module.exports = server => {

    router.post('/create',create);

    router.post('/view',view);

    router.post('/details',details);

    router.put('/update/:id',update);

    router.put('/change-status',changeStatus);

    router.put('/delete',destroy);

    server.use('/api/admin/material', router);
}
