var mongoose = require('mongoose');

var Whiskey = mongoose.model("Whiskey", {
	nimi: {
		type: 'String'
	},
	valmistaja: {
		type: 'String'
	},
	pullokoko: {
		type: 'String'
	},
	hinta: {
		type: 'String'
	},
	valmistusmaa: {
		type: 'String'
	},
	luonnehdinta: {
		type: 'String'
	},
	prosentit: {
		type: 'String'
	}

})

module.exports = {Whiskey};