const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Routes CRUD pour les projets

router
    .route('/projects')
        .get(projectController.createProject)
        .post(projectController.getAllProjects)


router
    .route('/projects/:id')
        .get(projectController.getProjectById)
        .put(projectController.updateProjectById)
        .delete(projectController.deleteProjectById)

module.exports = router;