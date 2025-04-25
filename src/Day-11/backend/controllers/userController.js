const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require("../models/userModel");


const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await users.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Compare the password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET, // Ensure you set JWT_SECRET in your .env file
            { expiresIn: '1h' } // Token expires in 1 hour
        );

        // Return the token
        return res.status(200).json({
            message: "Login successful",
            token,
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Server error" });
    }
};

const userRegister = async (req, res) => {
    try {
        const { email, password, username } = req.body;

        // Check if the email already exists
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered" });
        }

        // Hash the password before saving the user
        const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds = 10

        // Create new user
        const newUser = new users({
            email,
            password: hashedPassword,
            username,
        });

        // Save the new user to the database
        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email },
            process.env.JWT_SECRET, // Ensure you set JWT_SECRET in your .env file
            { expiresIn: '1h' }
        );

        // Return success response
        return res.status(201).json({
            message: "User registered successfully",
            token,
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Server error" });
    }
};


module.exports = {
    userLogin,
    userRegister
}