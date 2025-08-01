const express = require('express');
const User = require("../models/User");
const jwt = require('jsonwebtoken');
const { protect } = require("../middleware/authMiddleware")

const router = express.Router();

//@routre POST /api/users/register
//@desc Register a new user
//@access Public
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        //registration logic
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = new User({ name, email, password });
        await user.save();

        //Create JWT payload
        const payload = {
            user: {
                id: user._id,
                role: user.role
            }
        };

        //sign and return token along with user data
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '40h' },  //reduce it
            (err, token) => {
                if (err) throw err;
                res.status(201).json({
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        role: user.role
                    },
                    token,
                });
            }
        )

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


//@route POST /api/users/login
//@desc Authenticate user
//@access Public
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        //find user by email
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        //Create JWT payload
        const payload = {
            user: {
                id: user._id,
                role: user.role
            }
        };

        //sign and return token along with user data
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '40h' },  //reduce it
            (err, token) => {
                if (err) throw err;
                res.json({
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        role: user.role
                    },
                    token,
                });
            }
        );

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });

    }
});

//@route GET /api/users/profile
//@desc Get logged-in users profile (Protected Route)
//@access Private
router.get('/profile' , protect, async (req, res) => {
    res.json(req.user);
        
})
module.exports = router;
