const RestaurantModel = require('../models/restaurantModel');  // Import Room model

// Create a new restaurant
exports.createRestaurant = async (req, res) => {
    try {
        let newRestaurant = new RestaurantModel({
            name: req.body.name,
            phonenumber: req.body.phonenumber,
            location: req.body.location,
            ratings: req.body.ratings
        });
        newRestaurant = await newRestaurant.save(); // Save the new room to the database
        res.send(newRestaurant); // Send the saved room as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Get all restaurnat
exports.getAllRestaurant = async (req, res) => {
    try {
        const allRestaurant = await RestaurantModel.find(); // Get all restaurant name from the database
        res.send(allRestaurant); // Send all restaurant as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something  wrong
    }
};