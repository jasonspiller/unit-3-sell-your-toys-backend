// create schema
var mongoose 			= require('mongoose'),
		Schema 				= mongoose.Schema;

var ItemSchema = new Schema({
	date: { type: String, default: Date.now },
	title: String,
	condition: String,
	price: Number,
	zip: Number,
	email: String,
	image: String,
	description: { type: String, default: '' },
	sold: { type: Boolean, default: false }
});

var Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
