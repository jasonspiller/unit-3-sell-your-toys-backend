var express 						= require('express'),
		router 							= express.Router(),
		controllers = require('../controllers/index')
		itemsControllers = require('../controllers/items')

// home page
router.get('/', controllers.home);

// API Routes
router.get('/api/items', itemsControllers.getItems);
router.get('/api/items/:item_id', itemsControllers.getItem);
router.post('/api/items', itemsControllers.postItem);
router.put('/api/items/:item_id', itemsControllers.updateItem);
router.delete('/api/items/:item_id', itemsControllers.deleteItem);
router.post('/api/items/search/:query', itemsControllers.searchItems);

// 404
router.get('*', controllers.fourZeroFour);

module.exports = router;
