const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register User
const registerUser = async (req, res) => {
    const { fullname, email, password, confirmpassword } = req.body;

    if (!fullname || !email || !password || !confirmpassword) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    if (password !== confirmpassword) {
        return res.status(400).json({ message: "Passwords do not match!" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            fullname,
            email,
            password: hashedPassword,
            confirmpassword: hashedPassword
        });

        await user.save();
        res.status(201).json({ message: "User Registered Successfully!" });
    } catch (err) {
        console.error("Registration Error:", err);
        res.status(500).json({ message: "Server Error" });
    }
};
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials!" });
        }

        // Generate JWT Token
        const token = jwt.sign({ userId: user._id }, "your_secret_key", { expiresIn: "1h" });

        res.json({
            message: "Login Successful!",
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            token
        });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};


module.exports = { registerUser,loginUser };
