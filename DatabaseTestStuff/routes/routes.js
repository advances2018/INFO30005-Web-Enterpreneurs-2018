const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');


router.get('/', controller.indexPage);

router.get('/login', controller.loginPage);

router.get('/about', controller.aboutPage);

router.get('/news', controller.newsPage);

router.get('/Bye', controller.sayBye);

//router.get('/db', controller.Alldb);

//router.get('/db/:index', controller.Indexdb);

router.get('/search', controller.searchPage);

router.get('/register', controller.registerPage);

router.get('/forgot', controller.forgotPage);

router.get('/dummypage', controller.dummypage);

// Create new content entry
//router.post('/api',controller.upload_content);

// Find all cafes
//router.get('/api',controller.findAll);

module.exports = router;