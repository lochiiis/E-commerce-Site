const express = require('express');
const Product = require('../models/Product');
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
            product.gender = gender || product.gender;
            product.images = images || product.images;
            product.isFeatured = isFeatured !== undefined ? isFeatured : product.isFeatured;
            product.isPublished = isPublished !== undefined ? isPublished : product.isPublished;
            product.tags = tags || product.tags;
            product.dimensions = dimensions || product.dimensions;
            product.sku = sku || product.sku;

            //save updated product
            const updatedProduct = await product.save();
            res.status(200).json({
                message: 'Product updated successfully',
                product: updatedProduct,
            });

        } else {
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


// @route GET /api/products
// @desc Get all products with optional filters
// @access Public
router.get('/', async (req, res) => {
    try {
        const {
            collection,
            size,
            color,
            gender,
            minPrice,
            maxPrice,
            sortBy,
            search,
            category,
            material,
            limit,
        } = req.query;

        let query = {};

        //filter logic
        if(collection && collection.toLocaleLowerCase() !== 'all'){
            query.collections = collection;
        }
        
        if(category && category.toLocaleLowerCase() !== 'all'){
            query.category = category;
        }

        if(material){
            query.material = {$in: material.split(',')};
        }

        if(size){
            query.sizes = { $in: size.split(',') };
        }
        if(color){
            query.colors = { $in: [] };
        }
        if(gender){
            query.gender=gender;
        }
        if(minPrice || maxPrice){
            query.price = {};
            if(minPrice) {
                query.price.$gte = Number(minPrice); //grater than or equal to
            }
            if(maxPrice) {
                query.price.$lte = Number(maxPrice); //less than or equal to
            }
        }
        if(search){
            query.$or = [
                {name: { $regex: search, $options: "i"}},
                {description: { $regex: search, $options: "i" }},
            ]
        }

        //sorting logic
        let sort = {};
        if(sortBy){
            switch(sortBy){
                case "priceAsc":
                    sort={ price: 1 };
                    break;
                case "priceDesc":
                    sort={ price: -1 };
                    break;
                case "popularity":
                    sort={ rating: -1 };
                    break;
                default:
                    break;

            }
        }

        //fetch products and apply sorting and limit
        let products = await Product.find(query)
            .sort(sort)
            .limit(Number(limit) || 0);
        res.json(products);

    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})


// @route GET /api/products/best-seller
// @desc Retrieve the products with the highest rating
// @access Public
router.get("/best-seller" , async (req, res)=>{
    try{
        const bestSeller = await Product.findOne().sort({rating: -1});
        if(bestSeller){
            res.json(bestSeller);
        }else{
            res.status(404).json({message:"No best seller found"});
        }

    }catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})


// @route GET /api/products/new-arrivals
// @desc Retrieve latest 8 products - by creation date
// @access Public
router.get('/new-arrivals',async (req,res)=>{
    try{
        const newArrivals = await Product.find().sort({ createdAt: -1 }).limit(8);
        res.json(newArrivals);
        
    }catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})



// @route GET /api/products/:id
// @desc Get single product by ID
// @access Public
router.get('/:id', async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }

    }catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }

})


// @route GET /api/products/similar/:id
// @desc Get similar products based on current product's gender and category
// @access Public
router.get('/similar/:id', async (req, res) => {
    const {id}= req.params;
    
    try{
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const similarProducts = await Product.find({
            _id: { $ne: id }, // exclude the current product
            gender: product.gender,
            category: product.category,
        }).limit(4); 

        res.json(similarProducts);

    }catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})




module.exports = router;