const express = require ('express');
const router = express.Router();
const controller = require ('../controllers/user.controller');
const authJwt = require('../middlewares/authJwt');

router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.get('/logout', controller.logout);
router.get('/user', [authJwt.verifyToken ], controller.currentUser);
router.get('/user/:id', [authJwt.verifyToken ], controller.getUser);
module.exports = router;
