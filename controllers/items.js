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
			console.log('Get Item Error: ' + err);
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
			console.log('Create Item Error: ' + err);
			res.sendStatus(500);
		}

		// using SendGrid's v3 Node.js Library
		// https://github.com/sendgrid/sendgrid-nodejs
		const sgMail = require('@sendgrid/mail');
		sgMail.setApiKey(process.env.SENDGRID_API_KEY);
		const msg = {
			to: `${item.email}`,
			from: `slick@openyourtoys.com`,
			subject: `${item.title} Has Been Posted...`,
			text: `Your toy has been posted. To edit it simple click the link: https://sellyourtoys.jasonspiller.com/update/${item.id}`,
			html: `Your toy has been posted. To edit it simple click its title: <a href="https://sellyourtoys.jasonspiller.com/update/${item.id}">${item.title}</a>`
		};
		sgMail.send(msg);

		res.json(item);
	});
}


// update item
exports.updateItem = function(req, res) {
	console.log('update');
	console.log(req.body);

	db.Item.findByIdAndUpdate(req.params.item_id, {$set: req.body}, function(err, item) {
		if(err) {
			console.log('Update Item Error: ' + err);
			res.sendStatus(500);
		}

		// get document after updates
		db.Item.findById(req.params.item_id, function(err, item) {
			if(err) {
				console.log('Get Item Error: ' + err);
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
			console.log('Delete Item Error: ' + err);
			res.sendStatus(500);
		}
		res.send("Post Deleted");
  });
}

// search
exports.searchItems = function(req, res) {
	console.log('search: ' + req.params.query);

	db.Item.setKeywords(function(err) {
		db.Item.search(req.params.query, { title: 1, description: 2, price: 3, date: 4, image: 5, condition: 6, zip: 7, email: 8, sold: 9 }, {
	     conditions: {title: {$exists: true} },
	     sort: {title: 1},
	     limit: 100
	   }, function(err, data) {
			 if(err) {
				 console.log('Search Error: ' + err);
				 res.sendStatus(500);
			 }
			 console.log(data);
			 res.json(data);
	   });
 	});
}
