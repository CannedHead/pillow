var mongoose = require('mongoose');

var PillowLanding = mongoose.Schema({

    nombre: { type: String, default: '' },
    apellido: { type: String, default: '' },
    email: { type: String, lowercase: true, trim: true, index: { unique: true } },
    phone: { type: String, default: '' },
    ejeComercial: { type: String, default: '' },
    subEje: { type: String, default: '' },
	origen: { type: String, default:''},
	Status: { type: String, default:''}

});

module.exports = mongoose.model('PillowLanding', PillowLanding);



