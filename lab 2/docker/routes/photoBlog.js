const express = require('express');
const router = express.Router();
const PhotoBlogController = require('../controllers/PhotoBlogController');

// Головна сторінка
router.get('/', PhotoBlogController.getAll);

// Сторінка деталі
router.get('/item/:id', PhotoBlogController.getItem);

// Сторінка для створення нового запису
router.get('/new', PhotoBlogController.showCreateForm);

// Додавання нового запису
router.post('/new', PhotoBlogController.createPost);

// Сторінка Privacy Policy
router.get('/privacy', PhotoBlogController.privacyPolicy);

// Сторінка "Про розробника"
router.get('/about', PhotoBlogController.about);

module.exports = router;
