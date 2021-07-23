const FavoriteMusic = require('../model/favoriteMusic.model')
const mongoose = require('mongoose')

const favoriteMusicService = {}

async function findUser(idUser) {
    try{
        const user = FavoriteMusic.findOne({idUser:mongoose.Types.ObjectId(idUser)})
        return user ? user : null
    } catch(e) {
        throw new Error ('Error while getting user')
    }
}

async function createFavoriteMusic(idUser, songs) {
    try {
        const favoriteMusic = new FavoriteMusic({idUser, songs})
        const newFavoriteMusic = await favoriteMusic.save();
        return newFavoriteMusic
    } catch (e) {
        throw new Error ('Error save favorite Music')
    }
}

async function updateFavoriteMusic(user, songs) {
    try {
        user.songs.push(songs.toString())
        user.save();
        return user
    } catch (e) {
        throw new Error ('Error save favorite Music')
    }
}

favoriteMusicService.upsertFavoriteMusic = async function ({idUser, songs}) {
    try {
        const user = await findUser(idUser)
        if(user) {
            return await updateFavoriteMusic(user, songs)
        }
        return await createFavoriteMusic (idUser, songs)
    } catch(e) {
        throw new Error ('Error save favorite Music')
    }
}

module.exports = favoriteMusicService;