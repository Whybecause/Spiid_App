const express = require ('express');
const router = express.Router();
const controller = require('../controllers/rental.controller');
const authJwt = require('../middlewares/authJwt');

router.get("/rental/:id", [authJwt.verifyToken], controller.getUserRentals);
router.post('/rental/:id', [authJwt.verifyToken], controller.addRental);
router.patch('/rental/endRental', [authJwt.verifyToken], controller.endRental);

module.exports = router;