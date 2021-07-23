const express = require('express');
const router = express.Router();
const favoriteMusicController = require('../controllers/favoriteMusic.controller')

router.put('/favorite-music', favoriteMusicController.upser)

module.exports = router;