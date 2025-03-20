const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors"); // Import CORS
const restaurant = require("./routes/restaurantRoute");
const path = require("path");
require("dotenv").config({ path: "./config.env" });
const URL = process.env.REACT_APP_API_URL;
// Connect to MongoDB
connectDB();
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// CORS configuration
app.use(cors({
    origin: ['https://restaurantmgmt.onrender.com','https://5000-poojag7277-restaurantmg-1115xqmkyhv.ws-us118.gitpod.io'], // Allowed origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true
}));

// API routes
app.use("/api", restaurant);

// Serve static files (React app)
app.use(express.static(path.join(__dirname, "./frontend/build")));

// Catch-all for serving React app
app.get("*", function (req, res) {
    res.sendFile(
        path.join(__dirname, "./frontend/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Express server running at http://localhost:${port}`));

