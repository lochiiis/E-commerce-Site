import { Plus, Trash2 } from 'lucide-react'
import React from 'react'

const CartContents = () => {

    const cartItems = [
        {
            productId: 1,
            name: 'T-shirt',
            size: "M",
            color: 'Red',
            quantity: 1,
            price: 100,
            image: 'https://picsum.photos/200?random=1',
        },
        {
            productId: 2,
            name: 'Jeans',
            size: "L",
            color: 'Blue',
            quantity: 2,
            price: 200,
            image: 'https://picsum.photos/200?random=2',
        },
        {
            productId: 3,
            name: 'Shoes',
            size: "8",
            color: 'Black',
            quantity: 1,
            price: 300,
            image: 'https://picsum.photos/200?random=3',
        }

    ]

    return (
        <div>
            {cartItems.map((item, index) => (


                <div key={index} className='flex items-start justify-between py-4 border-b border-gray-200'>
                    <div className='flex items-start'>
                        <img src={item.image} alt={item.name} className='w-20 h-24 object-cover mr-4 rounded' />
                        <div>
                            <h3>{item.name}</h3>
                            <p className='text-sm text-gray-500'>
                                size:{item.size} | color: {item.color}
                            </p>

                            <div className='flex items-center mt-2'>
                                <button className='border rounded px-1 text-sm font-medium'>-</button>
                                <span className='mx-3'>{item.quantity}</span>
                                <button className='border rounded px-1  text-sm font-medium'>+</button>
                            </div>
                        </div>
                    </div>

                    <p className='text-lg font-semibold'>${item.price.toLocaleString()}</p>  
                    <button>
                        <Trash2 className='w-5 h-5 mt-2 text-red-600'/>
                    </button>
                    </div>
            ))}
        </div>
    )
}

export default CartContents