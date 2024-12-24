const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors"); // Import CORS
const restaurant = require("./routes/restaurantRoute")
const path = require('path');
require('dotenv').config( {path: "./config.env"}); // Ensure .env file is loaded
// Connect to MongoDB
connectDB();
const app = express();


// SERVE STATIC FILES
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./frontend/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

// Middleware to parse JSON requests
app.use(express.json());
//app.use(cors());

app.use(cors({
    origin: ["https://restaurantmgmt.onrender.com"], // Allow all origins temporarily for testing
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true
  }));  // Allow all origins for development
app.use("/api",restaurant)

app.get('/', (req, res) => {
    res.send('Welcome to the Restaurant Management API');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Express server running on port ${port}`));