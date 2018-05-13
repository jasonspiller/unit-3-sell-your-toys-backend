// create schema
var mongoose 			= require('mongoose'),
		Schema 				= mongoose.Schema;

var ItemSchema = new Schema({
	date: { type: String, default: Date.now },
	title: String,
	description: { type: String, default: '' },
	condition: String,
	price: Number,
	zip: Number,
	sold: { type: Boolean, default: false },
	image: String
 });

var Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
