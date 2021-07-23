const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

// get obtiene data
// post insertar data 
// put actualizar data
// delete borra data

// definomos post get put

// cuando el userio llama al controlador y llama al nuestro serviciio que crea nuestra abase de datos
router.post('/user', userController.create)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUser)
router.put('/user/:id', userController.updateUser)


module.exports = router;