const express = require('express');
const router = express.Router();

const { getJsonWebToken } = require('../controllers/authController');

router.route('/')
    .get(getJsonWebToken)

module.exports = router;