import { Clipboard, LogOut, PackageOpen, Store, User } from "lucide-react"
import { Link, NavLink, useNavigate } from "react-router-dom"


const AdminSidebar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    }

    return (
        <div className='p-6'>
            <div className='mb-6'>
                <Link to="/admin" className='text-2xl font-medium'>
                    Lochiiis
                </Link>
            </div>

            <h2 className="text-xl font-medium mb-6 text-center">Admin Dashboard</h2>

            <nav className="flex flex-col space-y-2">
                <NavLink to="/admin/users" className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"} >
                    <User className="w-5 h-5" />
                    <span>Users</span>
                </NavLink>

                <NavLink to="/admin/products" className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"} >
                    <PackageOpen className="w-5 h-5" />
                    <span>Products</span>
                </NavLink>

                <NavLink to="/admin/orders" className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"} >
                    <Clipboard className="w-5 h-5" />
                    <span>Orders</span>
                </NavLink>

                <NavLink to="/admin/shop" className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"} >
                    <Store className="w-5 h-5" />
                    <span>Shop</span>
                </NavLink>
            </nav>

            <div className="mt-6">
                <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"
                >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </div>

        </div>
    )
}

export default AdminSidebar