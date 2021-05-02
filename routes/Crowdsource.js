const express = require('express');
const router = express.Router();

const verifyJsonWebToken = require('../middleware/verifyJsonWebToken');

const {
    submitFeedingDetails,
    getFeedingDetails
} = require('../controllers/crowdsourcingController');

router.get('/', verifyJsonWebToken, getFeedingDetails)
router.post('/', verifyJsonWebToken, submitFeedingDetails)

module.exports = router;