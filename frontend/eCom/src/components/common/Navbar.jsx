import { Menu, MenuIcon, ShoppingCart, User, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import CartDrawer from '../layout/CartDrawer'

const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen);
    }

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
                    <button onClick={toggleCartDrawer} className='relative hover:text-black' >
                        <ShoppingCart className='w-6 h-6' />
                        <span className='absolute -top-1  bg-red-800 text-white text-xs rounded-full px-1'>55</span>
                    </button>

                    {/* search */}
                    <div className='overflow-hidden '>
                        <SearchBar />
                    </div>


                    <button onClick={toggleNavDrawer} className='md:hidden '>
                        <Menu className='w-6 h-6' />
                    </button>

                </div>
            </nav>

            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

            {/* mobile nav */}
            <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50
                ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>

                <div className='flex justify-end p-4'>
                    <button onClick={toggleNavDrawer}>
                        <X className='w-6 h-6' />
                    </button>
                </div>

                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                    <nav className='space-y-4'>
                        <Link to="#" onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Men</Link>
                        <Link to="#" onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Women</Link>
                        <Link to="#" onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Top Wear</Link>
                        <Link to="#" onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Bottom Wear</Link>
                    </nav>
                </div>

            </div>
        </>
    )
}

export default Navbar