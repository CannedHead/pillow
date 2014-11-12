var mongoose = require('mongoose');

var PillowTalkcEnsenanzaSchema = mongoose.Schema({

    name: { type: String, default: '' },
    email: { type: String, lowercase: true, trim: true, index: { unique: true } },
    phone: { type: String, default: '' },
    ejeComercial: { type: String, default: '' },
    subEje: { type: String, default: '' },
	origen: { type: String, default:''}

});

module.exports = mongoose.model('PillowTalkcEnsenanza', PillowTalkcEnsenanzaSchema);