const express = require('express');
const bcrypt = require('bcrypt'); // Import bcrypt
const router = express.Router();
const User = require('../models/User'); // Ensure correct path to the User model

// Route to add a new user
router.post('/', async (req, res) => {
    const { firstName, lastName, email, idNumber, password } = req.body;

    try {
        // Hash the password before saving
        const saltRounds = 10; // Recommended value is 10
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new user instance with the hashed password
        const newUser = new User({
            firstName,
            lastName,
            email,
            idNumber,
            password: hashedPassword // Store the hashed password
        });

        // Save user to MongoDB
        const savedUser = await newUser.save();
        res.json(savedUser); // Respond with the saved user data
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error saving user to database.' });
    }
});

module.exports = router;
