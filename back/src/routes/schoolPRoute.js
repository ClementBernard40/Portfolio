const express = require('express');
const router = express.Router();
const schoolPController = require('../controllers/schoolPController');

// Routes CRUD pour les projets

router
    .route('/schoolCarreer')
        .post(schoolPController.createSchoolP)
        .get(schoolPController.getAllSchoolP)


router
    .route('/schoolCarreer/:id')
        .get(schoolPController.getSchoolPById)
        .put(schoolPController.updateSchoolPById)
        .delete(schoolPController.deleteSchoolPById)

module.exports = router;
