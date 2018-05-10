var db = require('../models');


// return all items
exports.getItems = function(req, res) {
	console.log('gets');

  db.Item.find({}, function(err, items) {
		if(err) {
			console.log('Gets Posts Error: ' + err);
			res.sendStatus(500);
		}
		res.json(items);
  });
}


// get one item
exports.getItem = function(req, res) {
	console.log('get');

	db.Item.findById(req.params.item_id, function(err, item) {
		if(err) {
			console.log('Get Post Error: ' + err);
			res.sendStatus(500);
		}
		res.json(item);
  });
}


// create item
exports.postItem = function(req, res) {
	console.log('create');

	db.Item.create(req.body, function(err, item) {
		if(err) {
			console.log('Create Post Error: ' + err);
			res.sendStatus(500);
		}
		res.json(item);
	});
}


// update item
exports.updateItem = function(req, res) {
	console.log('update');
	console.log(req.body);

	db.Item.findByIdAndUpdate(req.params.item_id, {$set: req.body}, function(err, item) {
		if(err) {
			console.log('Update Post Error: ' + err);
			res.sendStatus(500);
		}

		// get document after updates
		db.Item.findById(req.params.item_id, function(err, item) {
			if(err) {
				console.log('Get Post Error: ' + err);
				res.sendStatus(500);
			}
			res.json(item);
		});
	});
}


// delete item
exports.deleteItem = function(req, res) {
	console.log('delete');

	db.Item.findByIdAndRemove(req.params.item_id, function(err, item) {
		if(err) {
			console.log('Delete Post Error: ' + err);
			res.sendStatus(500);
		}
		res.send("Post Deleted");
  });
}
