var express 						= require('express'),
		router 							= express.Router(),
		itemsController = require('../controllers/items')

// API Routes
router.get('/api/items', itemsController.getItems);
router.get('/api/items/:item_id', itemsController.getItem);
router.post('/api/items', itemsController.postItem);
router.put('/api/items/:item_id', itemsController.updateItem);
router.delete('/api/items/:item_id', itemsController.deleteItem);

module.exports = router;
