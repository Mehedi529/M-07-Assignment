const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');


router.get('/blogs', blogController.read);
router.post('/blogs', blogController.create);
router.put('/blogs/:id', blogController.update);
router.delete('/blogs/:id', blogController.delete);


router.get('/comments', commentController.read);
router.post('/comments', commentController.create);
router.put('/comments/:id', commentController.update);
router.delete('/comments/:id', commentController.delete);


router.get('/messages', messageController.read);
router.post('/messages', messageController.create);
router.put('/messages/:id', messageController.update);
router.delete('/messages/:id', messageController.delete);


router.get('/portfolios', portfolioController.read);
router.post('/portfolios', portfolioController.create);
router.put('/portfolios/:id', portfolioController.update);
router.delete('/portfolios/:id', portfolioController.delete);


router.get('/products', productController.read);
router.post('/products', productController.create);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.delete);

module.exports = router;
