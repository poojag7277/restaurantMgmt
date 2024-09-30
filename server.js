const express = require('express');
const connectDB = require('./config/db');
const restaurantRoute = require('./routes/restaurantRoute'); // Import room routes

const app = express();
const PORT = process.env.PORT || 3000;

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
