const express = require('express');
const connectDB = require('./config/db');
const restaurantRoute = require('./routes/restaurantRoute'); // Import room routes
const cors = require('cors'); // Import CORS
require('dotenv').config(); // Ensure .env file is loaded

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors()); // Allow all origins by default (you can restrict this later if needed)

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Basic route for home page
app.get("/", (req, res) => {
    res.send("Hello! Welcome to our restaurant home page.");
});


// Use room routes with prefix '/api'
app.use('/api', restaurantRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


