const CrowdsourceInfo = require('../models/CrowdsourceInfo');
const jwt = require('jsonwebtoken')

// @route GET /api/crowdsourcing
exports.getFeedingDetails = async (req, res, next) => {
    try {
        jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                CrowdsourceInfo.find().then((docs) => {
                    return res.status(200).json({
                        success: true,
                        count: docs.length,
                        data: docs,
                    });
                });
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error,
        });
    }
};

// @route POST /api/crowdsourcing
exports.submitFeedingDetails = async (req, res, next) => {
    try {
        jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                const { repeatFor } = req.body
                const repeatedDocuments = []
                for (var i = 0; i < repeatFor; i++) {
                    repeatedDocuments.push(req.body)
                }
                CrowdsourceInfo.insertMany(repeatedDocuments).then(docs => {
                    return res.status(201).json({
                        success: true,
                        crowdsourceInfo: docs,
                    });
                });
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Internal Server Error",
        });
    }
};

