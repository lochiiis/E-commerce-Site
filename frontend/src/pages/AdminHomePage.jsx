import { Link } from "react-router-dom"

const AdminHomePage = () => {

    const orders = [
        {
            _id: 123123,
            user: {
                name: "John Doe",
            },
            totalPrice: 150.00,
            status: "Processing",
        },
        {
            _id: 456456,
            user: {
                name: "Jane Smith",
            },
            totalPrice: 200.00,
            status: "Processing",
        },
        {
            _id: 789789,
            user: {
                name: "Alice Johnson",
            },
            totalPrice: 300.00,
            status: "Processing",
        },
        {
            _id: 101112,
            user: {
                name: "Bob Brown",
            },
            totalPrice: 120.00,
            status: "Cancelled",
        },
        {
            _id: 131415,
            user: {
                name: "Charlie White",
            },
            totalPrice: 180.00,
            status: "Processing",
        },
    ]

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold">Revenue</h2>
                    <p className="text-xl">$10000</p>
                </div>

                <div className="p-4 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold">Total Orders</h2>
                    <p className="text-xl">200</p>
                    <Link to="/admin/orders" className="text-blue-500 hover:underline">Manage Orders</Link>
                </div>

                <div className="p-4 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold">Total Products</h2>
                    <p className="text-xl">100</p>
                    <Link to="/admin/products" className="text-blue-500 hover:underline">Manage Products</Link>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 text-left">
                        <thead className="uppercase text-xs">
                            <tr className="bg-gray-100">
                                <th className="px-6 py-2 border-b">Order ID</th>
                                <th className="px-6 py-2 border-b">Customer</th>
                                <th className="px-6 py-2 border-b">Total Price</th>
                                <th className="px-6 py-2 border-b">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key={order._id} className="border-b hover:bg-blue-100 cursor-pointer">
                                        <td className="p-4">{order._id}</td>
                                        <td className="p-4">{order.user.name}</td>
                                        <td className="p-4">${order.totalPrice.toFixed(2)}</td>
                                        <td className="p-4">{order.status}</td>
                                    </tr>

                                ))

                            ) : (
                            
                                <tr>
                                    <td colSpan={4} className="p-4 text-center text-gray-500">
                                        No recent orders found.
                                    </td>
                                </tr>


                            )

                            }
                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    )
}

export default AdminHomePage