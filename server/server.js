//server.js file
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
require('dotenv').config(); // Ensure dotenv is required to load .env variables

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()); // Enable CORS
app.use(express.json()); // For parsing application/json

// Database connection
mongoose.connect(process.env.DATABASE )
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB connection error:", err));


const sendemail = require('./routes/sendemail');
app.use('/send-email',sendemail);


const addUserRoute = require('./routes/addUser'); // Import the user route
app.use('/addUser', addUserRoute); // Mount the route for adding users

// Start the server on port 4000
const PORT = process.env.PORT || 4000; // Default to 4000 if PORT is not set
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

