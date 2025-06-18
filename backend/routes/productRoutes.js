const express = require('express');
const Product = require('../models/product');
const { protect, admin } = require('../middleware/authMiddleware');


const router = express.Router();

// @route POST /api/products
// @desc Create a new product
// @access Private/Admin
router.post('/', protect, admin, async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            discountedPrice,
            countInStock,
            category,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            tags,
            dimensions,
            weight,
            sku,
        } = req.body;

        const product = new Product(
            {
                name,
                description,
                price,
                discountedPrice,
                countInStock,
                category,
                sizes,
                colors,
                collections,
                material,
                gender,
                images,
                isFeatured,
                isPublished,
                tags,
                dimensions,
                weight,
                sku,
                user: req.user._id,  //reference to the admin user
            });

        const createProduct = await product.save();
        res.status(201).json({
            message: 'Product created successfully',
            product: createProduct,
        });

    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});


//@route PUT /api/products/:id
//@desc Update existing product ID
//@access Private/Admin
router.put('/:id', protect, admin, async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            discountedPrice,
            countInStock,
            category,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            tags,
            dimensions,
            weight,
            sku,
        } = req.body;

        //Find product by ID
        const product = await Product.findById(req.params.id);
        if (product) {
            //update product fields
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.discountedPrice = discountedPrice || product.discountedPrice;
            product.countInStock = countInStock || product.countInStock;
            product.category = category || product.category;
            product.sizes = sizes || product.sizes;
            product.colors = colors || product.colors;
            product.collections = collections || product.collections;
            product.material = material || product.material;
            product.gender=gender || product.gender;
            product.images = images || product.images;
            product.isFeatured = isFeatured !== undefined ? isFeatured : product.isFeatured;
            product.isPublished = isPublished !== undefined ? isPublished : product.isPublished;
            product.tags = tags || product.tags;
            product.dimensions = dimensions || product.dimensions;
            product.weight = weight || product.weight;
            product.sku = sku || product.sku;

            //save updated product
            const updatedProduct = await product.save();
            res.status(200).json({
                message: 'Product updated successfully',
                product: updatedProduct,
            });
        
        }else{
            res.status(404).json({ message: 'Product not found' });
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})


// @route DELETE /api/products/:id
// @desc Delete a product by ID
// @access Private/Admin
router.delete('/:id', protect, admin, async (req, res) => {
    try {
        //Find product by ID
        const product = await Product.findById(req.params.id);
        if (product) {
            //Remove product from DB
            await product.deleteOne();
            res.json({ message: 'Product removed successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

module.exports = router;