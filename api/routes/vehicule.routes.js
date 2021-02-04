const express = require ('express');
const router = express.Router();
const controller = require ('../controllers/vehicule.controller');
const authJwt = require('../middlewares/authJwt');

router.post('/vehicule', [authJwt.verifyToken, authJwt.isAdmin], controller.addVehicule);
router.patch('/vehicule/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.generateQrCode);
router.get('/vehicule/:id', [authJwt.verifyToken ], controller.getVehicule);
router.get("/availableVehicule", [authJwt.verifyToken], controller.getAvailableVehicules)
router.get('/vehicule', [authJwt.verifyToken ], controller.getAllVehicules);

module.exports = router;