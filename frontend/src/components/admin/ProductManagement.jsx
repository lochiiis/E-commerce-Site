import { Link } from "react-router-dom"


const ProductManagement = () => {

    const products = [
        {
            _id: 123123,
            name: "Shirt",
            price: 200,
            sku: "12346325896"  //stock keeping unit
        },
        {
            _id: 123124,
            name: "Pants",
            price: 300,
            sku: "12346325897"
        },
        {
            _id: 123125,
            name: "Shoes",
            price: 400,
            sku: "12346325898"
        }

    ]

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            console.log("Deleting product with ID:", id._id);
        }
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Product Management</h2>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                        <tr>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Price</th>
                            <th className="py-3 px-4">SKU</th>
                            <th className="py-3 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <tr
                                    key={product._id}
                                    className="border-b hover:bg-gray-50 cursor-pointer"
                                >
                                    <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                                        {product.name}
                                    </td>
                                    <td className="p-4">
                                        ${product.price.toFixed(2)}
                                    </td>
                                    <td className="p-4">
                                        {product.sku}
                                    </td>
                                    <td className="p-4">
                                        <Link to={`/admin/products/${product._id}/edit`}
                                            className="bg-yellow-500 text-white py-1.5 px-4 rounded mr-2 hover:bg-yellow-600"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(product)}
                                            className="bg-red-700 text-white py-1 px-2 rounded mr-2 hover:bg-red-800"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4">No products found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ProductManagement