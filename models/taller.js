var mongoose = require('mongoose');

var tallerSchema = mongoose.Schema({

    name: { type: String, default: '' },
    email: { type: String, lowercase: true, trim: true, index: { unique: true } },
    phone: { type: String, default: '' }

});

module.exports = mongoose.model('Taller', tallerSchema);