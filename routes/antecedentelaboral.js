const express = require('express');
const Router = express.Router();
const antecedentelaboralController = require('../controllers/antecedentelaboralController');

// Rutas para la API de antecedentes laborales
Router.get('/', antecedentelaboralController.getAll);
Router.get('/id', antecedentelaboralController.getById);
Router.post('/create', antecedentelaboralController.create);
Router.put('/update', antecedentelaboralController.update);
Router.delete('/remove', antecedentelaboralController.deleteAntecedenteLaboral);

module.exports = Router;