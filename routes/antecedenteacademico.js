const express = require('express');
const Router = express.Router();
const antecedenteacademicoController = require('../controllers/antecenteacademicoController');

// Rutas para la API de antecedentes académicos
Router.get('/', antecedenteacademicoController.getAll);
Router.get('/id', antecedenteacademicoController.getById);
Router.post('/create', antecedenteacademicoController.create);
Router.put('/update', antecedenteacademicoController.update);
Router.delete('/remove', antecedenteacademicoController.deleteAntecedenteAcademico);

module.exports = Router;