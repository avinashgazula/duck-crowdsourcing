const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

const connectDB = require('./config/db');
const rateLimiter = require('./middleware/rateLimit');
const authRoutes = require('./routes/auth');
const crowdsourceRoutes = require('./routes/Crowdsource');
const app = express();

dotenv.config({ path: './config/config.env' });

app.use(express.json());
app.use(express.static("client/build"));
app.use(cors());
app.use("/api/", rateLimiter)

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/crowdsourcing', crowdsourceRoutes);

const PORT = process.env.PORT || 5000;
module.exports = app.listen(PORT);
console.log(
    `Server running in ${process.env.NODE_ENV} environment on port ${PORT}`
);
