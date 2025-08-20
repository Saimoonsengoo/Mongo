const express = require('express');
const blogModel = require('../models/Blog');
const router = express.Router();
const BlogController = require('../controller/BlogController')

router.get('/', BlogController.index );

// Create blog (POST)
router.post('/', BlogController.post );

// Blog create form
router.get('/create', BlogController.create);

// Delete blog
router.post('/:id/delete', BlogController.delete);

// Show blog detail
router.get('/:id', BlogController.detail);

module.exports = router;
