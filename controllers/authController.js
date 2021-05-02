const jwt = require('jsonwebtoken')

// @route GET /api/token
exports.getJsonWebToken = async (req, res, next) => {
    // User for client application
    const reactClientUser = {
        id: 1,
        username: 'avinash'
    }

    jwt.sign({ reactClientUser }, process.env.JWT_SECRET, { expiresIn: '30d' }, (err, token) => {
        if (err) {
            res.status(500).json({
                message: 'Error generating token. Please try again later'
            })
        } else {
            res.status(200).json({ token })
        }
    })
};