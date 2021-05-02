const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const app = express();

dotenv.config({ path: './config/config.env' });

app.use(express.json());
app.use(express.static("client/build"));
app.use(cors())

connectDB();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
module.exports = app.listen(PORT);
console.log(
    `Server running in ${process.env.NODE_ENV} environment on port ${PORT}`
);
