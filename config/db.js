const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://restaurantMgmt_admin:restaurantMgmt_admin@restaurantmgmt.geyp7.mongodb.net/?retryWrites=true&w=majority&appName=restaurantMgmt');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;