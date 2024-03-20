const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Routes CRUD pour les projets

router
    .route('/contact')
        .post(contactController.createContact)
        .get(contactController.getAllContact)


router
    .route('/contact/:id')
        .get(contactController.getContactById)
        .put(contactController.updateContactById)
        .delete(contactController.deleteContactById)

module.exports = router;
