const express = require('express');
const Router = express.Router();
const ofertalaboralController = require('../controllers/ofertalaboralController');

// Rutas para la API de ofertas laborales
Router.get('/', ofertalaboralController.getAll);
Router.get('/id', ofertalaboralController.getById);
Router.post('/create', ofertalaboralController.create);
Router.put('/update', ofertalaboralController.update);
Router.delete('/remove', ofertalaboralController.deleteOfertaLaboral);

module.exports = Router;