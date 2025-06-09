import { Search, X } from 'lucide-react';
import React, { useState } from 'react'

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSearchToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        // Handle search logic here
        console.log('Searching for:', searchTerm);
        setSearchTerm('');
        setIsOpen(false);
    }


    return (
        <div className={`flex items-center justify-center w-full transition-all duration-200 ${isOpen ? 'absolute top-0 left-0 w-full bg-white h-30 z-50' : 'w-auto'} `}>
            {isOpen ?
                (
                    <form onSubmit={handleSearch} className='relative flex items-center justify-center w-full'>
                        <div className='relative w-1/2'>
                            <input type="text" placeholder='Search' 
                            value={searchTerm} 
                            className='bg-gray-200 py-1 px-4 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700'
                            onChange={(e)=> setSearchTerm(e.target.value)}
                            />


                            <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
                                <Search className='h-6 w-6' />
                            </button>

                        </div>

                        <button type='button' className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800' onClick={handleSearchToggle}>
                            <X className='w-6 h-6'/>
                        </button>
                    </form>
                ) :

                (
                    <button onClick={handleSearchToggle}>
                        <Search className='w-6 h-6' />
                    </button>
                )
            }
        </div>
    )
}

export default SearchBar