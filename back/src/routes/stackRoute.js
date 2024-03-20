const express = require('express');
const router = express.Router();
const stackController = require('../controllers/stackController');

// Routes CRUD pour les projets

router
    .route('/stack')
        .post(stackController.createStack)
        .get(stackController.getAllStack)


router
    .route('/stack/:id')
        .get(stackController.getStackById)
        .put(stackController.updateStackById)
        .delete(stackController.deleteStackById)

module.exports = router;
