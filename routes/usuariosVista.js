const express = require('express');
const Router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Rutas para la API de usuarios
Router.get('/', usuariosController.getAll);
Router.get('/id', usuariosController.getById);
Router.post('/create', usuariosController.create);
Router.put('/update', usuariosController.update);
Router.delete('/remove', usuariosController.deleteUsuario);

module.exports = Router;