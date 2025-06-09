import { Facebook, Instagram, PhoneCall } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <footer className='border-t py-12'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0'>
                <div>
                    <h3 className='text-lg text-gray-800'>Newsletter</h3>
                    <p className='text-gray-500 mb-4'>Be the first to hear about new products, exclusive events, and online offers.</p>
                    <p className='font-medium text-sm text-gray-600 mb-6'>Sign up and get 10% off your first order.</p>

                    {/* newsletter form */}
                    <form className="flex ">
                        <input type="email" placeholder='Enter your email' className='p-3 w-full text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all' required />

                        <button type='submit' className='bg-black text-white px-6 py-3 text-sm rounded-md hover:bg-gray-800 mx-1'>Subscribe</button>
                    </form>
                </div>


                {/* shop links */}
                <div>
                    <h3 className='text-lg text-gray-800 mb-4'>Shop</h3>
                    <ul className='space-y-2 text-gray-600'>
                        <li>
                            <Link to="#" className='hover:text-gray-500 transition-colors'>Men's Top Wear</Link>
                        </li>
                        <li>
                            <Link to="#" className='hover:text-gray-500 transition-colors'>Women's Top Wear</Link>
                        </li>
                        <li>
                            <Link to="#" className='hover:text-gray-500 transition-colors'>Men's Bottom Wear</Link>
                        </li>
                        <li>
                            <Link to="#" className='hover:text-gray-500 transition-colors'>Women's Bottom Wear</Link>
                        </li>

                    </ul>
                </div>


                {/* support links */}
                <div>
                    <h3 className='text-lg text-gray-800 mb-4'>Support</h3>
                    <ul className='space-y-2 text-gray-600'>
                        <li>
                            <Link to="#" className='hover:text-gray-500 transition-colors'>Contact us</Link>
                        </li>
                        <li>
                            <Link to="#" className='hover:text-gray-500 transition-colors'>About Us</Link>
                        </li>
                        <li>
                            <Link to="#" className='hover:text-gray-500 transition-colors'>FAQs</Link>
                        </li>
                        <li>
                            <Link to="#" className='hover:text-gray-500 transition-colors'>Features</Link>
                        </li>

                    </ul>
                </div>

                {/* follow us links */}
                <div>
                    <h3 className='text-lg text-gray-800 mb-4'>Follow Us</h3>
                    <div className='flex items-center space-x-4 mb-6'>

                        <a href="https://facebook.com" target='_blank' rel='noopner noreferrer' className='hover:text-gray-500'><Facebook className='h-5 w-5' /></a>
                        <a href="https://instagram.com" target='_blank' rel='noopner noreferrer' className='hover:text-gray-500'><Instagram className='h-5 w-5' /></a>

                    </div>
                    <p className='text-gray-700'>Call Us</p>
                    <p><PhoneCall className='inline-block mr-2 w-5 h-5' />071 123 4567</p>
                </div>
            </div>


            {/* copyright */}
            <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
                <p className='text-gray-500 text-center text-sm tracking-tighter'>
                    &copy; {new Date().getFullYear()} eCom. All rights reserved.
                </p>
            </div>
        </footer>















    )
}

export default Footer