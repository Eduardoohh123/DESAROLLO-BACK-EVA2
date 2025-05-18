const express = require('express');
const Router = express.Router();
const postulacionController = require('../controllers/postulacionController');

// Rutas para la API de postulaciones
Router.get('/', postulacionController.getAll);
Router.get('/id', postulacionController.getById);
Router.post('/create', postulacionController.create);
Router.put('/update', postulacionController.update);
Router.delete('/remove', postulacionController.deletePostulacion);

module.exports = Router;