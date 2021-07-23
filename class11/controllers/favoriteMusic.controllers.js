const favoriteMusicService = require('../services/favoriteMusic.service')

const FavoriteMusicController = {};

FavoriteMusicController.upser = async function (req, res, next) {
    try {
        const upserFavoriteMusic = await favoriteMusicService.upsertFavoriteMusic(req.body);
        return res.status(201).json({ status: 201, data: upserFavoriteMusic })
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message })
    }

}

module.exports = FavoriteMusicController;