// routes/addUser.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Ensure correct path to the User model

// Route to add a new user
router.post('/', async (req, res) => {
    const { firstName, lastName, email, idNumber, password } = req.body;

    // Create new user instance
    const newUser = new User({
        firstName,
        lastName,
        email,
        idNumber,
        password
    });

    try {
        // Save user to MongoDB
        const savedUser = await newUser.save();
        res.json(savedUser); // Respond with the saved user data
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error saving user to database.' });
    }
});

module.exports = router;
