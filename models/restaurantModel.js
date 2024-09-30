const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String, 
        required : true //restaurant name is mandatory
    },
    location: {
        type: String,
        required : true  
    },
    phonenumber: {
        type: Number,
        required: true //phonenumber of customer is mandatory
    },
    // date: {
    //     type: Date,
    //     required:true // date of when customer booked is required
    // },
    ratings: {
        type: Number
    }
    
});

const restaurantModel = mongoose.model('Restaurant',restaurantSchema);

module.exports = restaurantModel;