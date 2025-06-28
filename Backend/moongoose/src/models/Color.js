const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    name : String,
    code : String,
});

const colorModal = mongoose.model('colors',colorSchema);

module.exports = colorModal;