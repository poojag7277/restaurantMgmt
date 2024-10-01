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
// Get a room by ID
exports.getRestaurantById = async (req, res) => {
    try {
        const restaurantById = await RestaurantModel.findById(req.params.id); // Find room by ID
        if (!restaurantById) return res.status(404).send('Restaurant not found in database'); // If room is not found, return 404
        res.send(restaurantById); // Send the room as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Update a room by ID
exports.updateRestaurant = async (req, res) => {
    try {
        const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            phonenumber: req.body.phonenumber,
            location: req.body.location,
            ratings: req.body.ratings
        }, { new: true }); // Return the updated room

        if (!updatedRestaurant) return res.status(404).send('Restaurant not found in database'); // If room is not found, return 404
        res.send(updatedRestaurant); // Send the updated room as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Delete a room by ID
exports.deleteRestaurant = async (req, res) => {
    try {
        const restaurantById = await RestaurantModel.findByIdAndDelete(req.params.id); // Find room by ID and delete it
        if (!restaurantById) return res.status(404).send('Restaurant not found in database'); // If room is not found, return 404
        res.send("Restaurant deleted successfully"); // Send success message
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};