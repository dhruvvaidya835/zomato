const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const UserSchema = require('./models/User');
const errorHandler = require('./middlewares/errorHandler');
const { protect } = require('./middlewares/authMiddleware');
const generateToken = require('./utils/generateToken');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Default route
app.get('/', (req, res) => {
    res.send("Welcome to Flash Food Delivery Service");
});

// User Registration
app.post('/register', async (req, res) => {
    const { fullname, email, password, confirmpassword } = req.body;

    if (!fullname || !email || !password || !confirmpassword) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    if (password !== confirmpassword) {
        return res.status(400).json({ message: "Passwords do not match!" });
    }

    try {
        const existingUser = await UserSchema.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserSchema({
            fullname,
            email,
            password: hashedPassword,
        });

        await user.save();
        res.status(201).json({ message: "User Registered Successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

// User Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    try {
        console.log("Checking user:", email);
        const user = await UserSchema.findOne({ email });

        if (!user) {
            console.log("User not found");
            return res.status(401).json({ message: "Invalid credentials!" });
        }

        console.log("User found:", user.email);

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("Password mismatch");
            return res.status(401).json({ message: "Invalid credentials!" });
        }

        console.log("Generating token...");
        const token = generateToken(user._id);

        res.json({
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            token: token,
        });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ message: "Server Error", error: err.message });
    }
});




// Protected Profile Route
app.get('/profile', protect, async (req, res) => {
    res.json(req.user);
});

// MongoDB Connection (Direct Connection String)
mongoose.connect("mongodb+srv://Test1234:Test1234@cluster0.wjoqc.mongodb.net/backend?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB connected successfully");
}).catch((err) => {
    console.error("DB Connection Error:", err);
});

// Global Error Handler
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is Running on port: ${PORT}`);
});
