import React from 'react'
import { Facebook, Instagram  } from 'lucide-react';

const Topbar = () => {
  return (
    <div className='bg-red-600 text-white' >
        <div className='container mx-auto flex justify-between items-center py-3 px-4'>
          <div className='hidden md:flex items-center space-x-4'>
            <a href="#" className='hover:text-gray-300'>
              <Instagram className="h-5 w-5"/>
            </a>
            <a href="#" className='hover:text-gray-300'>
              <Facebook className="h-5 w-5"/>
            </a>
          </div>

          <div className='text-sm text-center'>
            <span>We ship worldwide- Fast and reliable shipping!</span>
          </div>

          <div className='text-sm hidden md:block'>
            <a href="tel:+1234567890" className='hover:text-gray-300'>071 123 4567</a>
          </div>

        </div>


    </div>
  )
}

export default Topbar