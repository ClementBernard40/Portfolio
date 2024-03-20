const express = require('express');
const router = express.Router();
const profPController = require('../controllers/profPController');

// Routes CRUD pour les projets

router
    .route('/profCarreer')
        .post(profPController.createProfP)
        .get(profPController.getAllProfP)


router
    .route('/profCarreer/:id')
        .get(profPController.getProfPById)
        .put(profPController.updateProfPById)
        .delete(profPController.deleteProfPById)

module.exports = router;
