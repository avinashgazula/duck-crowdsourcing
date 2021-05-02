const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        if (process.env.NODE_ENV == "test") {
            const conn = await mongoose.connect(process.env.MONGO_URI_TEST, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            console.log(`MongoDB connected: ${conn.connection.host}`);
        } else {
            const conn = await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            console.log(`MongoDB connected: ${conn.connection.host}`);
        }

    } catch (error) {
        console.error(error);
    }
};

const closeDB = async () => {
    await mongoose.disconnect()
}

module.exports = connectDB, closeDB;
