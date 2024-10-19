const { type } = require('express/lib/response');
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
    isOpen: {
        type: Boolean,
        default: true,
    },
    date: {
        type: Date,
        required: true
    }
    
});

const restaurantModel = mongoose.model('Restaurant',restaurantSchema);

module.exports = restaurantModel;
