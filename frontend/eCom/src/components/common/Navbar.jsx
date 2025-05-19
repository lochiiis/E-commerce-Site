import { Menu, ShoppingCart, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
                <div>
                    <Link to="/" className="text-2xl font-medium">
                        Lochi
                    </Link>
                </div>

                <div className='hidden md:flex space-x-6'>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase' >
                        men
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase' >
                        women
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase' >
                        top wear
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase' >
                        bottom wear
                    </Link>
                </div>

                <div className='flex items-center space-x-4'>
                    <Link to="/profile" className='text-gray-700 hover:text-black' >
                        <User className='w-6 h-6' />
                    </Link>
                    <button className='relative hover:text-black'>
                        <ShoppingCart className='w-6 h-6' />
                        <span className='absolute -top-1  bg-red-800 text-white text-xs rounded-full px-1'>55</span>
                    </button>

                    {/* search */}
                    <div className='overflow-hidden '>
                        <SearchBar />
                    </div>
                    
                    
                    <button className='md:hidden '>
                        <Menu className='w-6 h-6' />
                    </button>

                </div>
            </nav>

        </>
    )
}

export default Navbar