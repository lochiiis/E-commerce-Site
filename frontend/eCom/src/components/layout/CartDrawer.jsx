import { X } from 'lucide-react';
import CartContents from '../cart/CartContents';
import { useNavigate } from 'react-router-dom';


const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {

    const navigate = useNavigate();
    const handleCheckout = () => {
        toggleCartDrawer(); // Close the cart drawer
        navigate('/checkout');
    }


    return (
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[25rem] h-full bg-gray-100 shadow-lg transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>

            <div className='flex justify-end p-4'>
                <button onClick={toggleCartDrawer}>
                    <X className='w-6 h-6 text-gray-600' />
                </button>
            </div>

            {/* cart content with scrollable area */}
            <div className='flex-grow p-4 overflow-y-auto'>
                <h2 className='text-xl font-semibold mb-2 '>Your Cart</h2>

                {/* components */}
                <CartContents />
            </div>
            {/* checkout */}
            <div className='p-4 bg-white sticky bottom-0'>
                <button
                    onClick={handleCheckout}
                    className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition'>
                    Checkout
                </button>

                <p className='text-sm tracking-tighter text-gray-500 mt-2 text-center'>
                    Shipping, taxes and discounts calculated at checkout.
                </p>
            </div>



        </div>
    )
}

export default CartDrawer