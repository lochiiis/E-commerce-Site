import { useEffect, useState } from "react"
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: 150,
    description: "A stylish jacket that keeps you warm and fashionable.",
    brand: "FashionCo",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown", "Blue"],
    images: [
        {
            url: "https://picsum.photos/500/500?random=1",
            altText: "Stylish Jacket 1"
        },
        {
            url: "https://picsum.photos/500/500?random=2",
            altText: "Stylish Jacket 2"
        },
    ],
}

const similarProducts = [
    {
        _id: 1,
        name: "Casual Shirt",
        price: 50,
        images: [
            { url: "https://picsum.photos/500/500?random=3" }
        ],
    },
    {
        _id: 2,
        name: "Denim Jeans",
        price: 80,
        images: [
            { url: "https://picsum.photos/500/500?random=4" }
        ],
    },
    {
        _id: 3,
        name: "Sneakers",
        price: 90,
        images: [
            { url: "https://picsum.photos/500/500?random=5" }
        ],
    },
    {
        _id: 4,
        name: "Leather Boots",
        price: 110,
        images: [
            { url: "https://picsum.photos/500/500?random=6" }
        ],
    },
]


const ProductDetails = () => {
    const [MainImage, setMainImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, [selectedProduct.images]);

    const handleQuantityChange = (action) => {
        if (action === "plus") {
            setSelectedQuantity((prev) => prev + 1);
        } else if (action === "minus") {
            setSelectedQuantity((prev) => (prev > 1 ? prev - 1 : 1));
        }
    }

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select size and color before adding to cart.", {
                duration: 1000,
            });
            return;
        }

        setIsButtonDisabled(true);
        setTimeout(() => {
            toast.success("Item added to cart successfully!", {
                duration: 1000,
            });
            setIsButtonDisabled(false);
        }, 500);
    }


    return (
        <div className="p-6">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
                <div className="flex flex-col md:flex-row">
                    {/* left thumbnails */}
                    <div className="hidden md:flex flex-col space-y-4 mr-6">

                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText || `Thumbnail${index}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-gray-300  ${MainImage === image.url ? "border-gray-700" : ""}`}
                                onClick={() => setMainImage(image.url)}
                            />
                        ))}
                    </div>

                    {/* main image */}
                    <div className="md:w-1/2">
                        <div className="mb-4">
                            <img
                                src={MainImage}
                                alt="Main Product"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>


                    {/* mobile view */}
                    <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText || `Thumbnail${index}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-gray-300 hover:border-pink-500 transition duration-200 ${MainImage === image.url ? "border-pink-700" : ""}`}
                                onClick={() => setMainImage(image.url)} />
                        ))}
                    </div>

                    {/* right side */}
                    <div className="md:w-1/2 md:ml-10">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                            {selectedProduct.name}
                        </h1>
                        <p className="text-lg text-gray-600 mb-1 line-through">
                            ${selectedProduct.originalPrice &&
                                `${selectedProduct.originalPrice}`}
                        </p>
                        <p className="text-xl text-gray-500 mb-2">
                            ${selectedProduct.price}
                        </p>

                        <p className="text-gray-600 mb-4">
                            {selectedProduct.description}
                        </p>

                        <div className="mb-4">
                            <p className="text-gray-700">Color:</p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.colors.map((color, index) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-6 h-6 rounded-full border ${selectedColor === color ? "border-4 border-gray-300" : "border-gray-300"} cursor-pointer`}
                                        style={{
                                            backgroundColor: color.toLocaleLowerCase(),
                                            filter: "brightness(0.5)"
                                        }}
                                    >

                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-gray-700">Size:</p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.sizes.map((size) => (
                                    <button
                                        onClick={() => setSelectedSize(size)}
                                        key={size}
                                        className={`px-4 py-2 border border-gray-300 rounded-lg text-gray-700 cursor-pointer ${selectedSize === size ? "bg-black text-white" : "bg-white"}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-700">Quantity:</p>
                            <div className="flex items-center space-x-4 mt-2">
                                <button onClick={() => handleQuantityChange("minus")} className="px-3 py-1 bg-gray-200 rounded text-lg">
                                    -
                                </button>
                                <span className="text-lg">{selectedQuantity}</span>
                                <button onClick={() => handleQuantityChange("plus")} className="px-3 py-1 bg-gray-200 rounded text-lg" >
                                    +
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={handleAddToCart}
                            disabled={isButtonDisabled}
                            className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled ? "curor-not-allowed opacity-80" : "hover:bg-gray-900"}`}>
                            {isButtonDisabled ? "Adding..." : "Add To Cart"}
                        </button>
                        <div className="mt-10 text-gray-700">
                            <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
                            <table className="w-full text-left text-sm text-gray-600">
                                <tbody>
                                    <tr className="py-1">
                                        <td className="py-2">Brand:</td>
                                        <td className="py-2">{selectedProduct.brand}</td>
                                    </tr>
                                    <tr className="py-1">
                                        <td className="py-2">Material:</td>
                                        <td className="py-2">{selectedProduct.material}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <h2 className="text-2xl text-center font-medium mb-4">
                        You may also like
                    </h2>
                    <ProductGrid products={similarProducts} />
                </div>


            </div>
        </div>
    )
}

export default ProductDetails