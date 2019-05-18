const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/physicianFinder_DB", {
            useNewUrlParser: true,
            useCreateIndex: true
        });
        console.log(process.env.MONGODB_URI)
        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;