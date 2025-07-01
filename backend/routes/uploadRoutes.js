const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

require('dotenv').config();

const router = express.Router();

//Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET

})

//set up multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("image"),async (req, res) => {

    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }


        //function to handle stream upload to Cloudinary
        const streamUpload = (fileBuffer) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    {folder: "Products"},
                    (error, result) => {
                    if (result) {
                        resolve(result);
                    } else {
                        reject(error);
                    }
                });
                //use streamifier to convert buffer to stream
                streamifier.createReadStream(fileBuffer).pipe(stream);
            })
        }

        //call the stream upload function
        const result = await streamUpload(req.file.buffer);

        //response with the uploaded image URL
        res.json({
            imageUrl: result.secure_url,
        });


    } catch (error) {
        console.error("Error uploading image:", error);
        return res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;