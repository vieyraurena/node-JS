// se encarga de conectarse con la base de datos

const userController = require('../controllers/user.controller');
const User = require('../models/user.model')

const userService = {}

userService.createUser = async function ({name, email}) {
    // try/catch manejamos los errores
    // try creamos el user
    try{
        const user = new User({name, email});
        const newUser = await user.save();
        return newUser

    } catch (error){
        // dispara el error en una capa mas arriba, y se lo pasa al controlador
        throw new Error ('Error while save user')
    }
}

userService.getUsers = async function(){
    try{
        const users = await User.find({})
        return users
    }catch (error) {
        throw new Error ('Error while Pagination Users')
    }
}

userService.getUser = async function ({ id }) {
    try {
        const user = await User.findById(id)
        return user;
    } catch (e){
        throw new Error ('Error while Retuning user')
    }
}

userService.updateUser = async function({id}, {name,email}) {
    try{
        const user = await User.findById(id)
        const updateUser = await user.set({name, email})
        await updatateUser.save();
        return updateUser;
    } catch(e) {
        throw new Error ('Error while update user')
    }
}

module.exports = userService;