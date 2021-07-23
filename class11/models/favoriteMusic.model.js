const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteMusicSchema = mongoose.Schema({
    idUser: {
        type: Schema.Types.ObjectId,
        require: true
    },
    songs: [String]
}, { versionKey: false });

const FavoriteMusic = mongoose.model("FavoriteMusic", FavoriteMusicSchema);
module.exports = FavoriteMusic;