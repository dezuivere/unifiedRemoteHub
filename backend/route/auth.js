// routes/adminRoutes.js

const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin.js');

router.post('/login', adminController.adminLogin);
router.get('/profile/:id', adminController.getUserProfile);
router.post('/create', adminController.createAdmin);
router.post('/createcompany',adminController.createCompany)
router.get('/getcompany',adminController.getAllCompanies)
router.get('/company/:id', adminController.getCompanyById);
router.delete('/deletecompany/:id', adminController.deleteCompanyById);

module.exports = router;
