import React from 'react'

const Header = () => {
  return (
    <header className='shadow py-2'>
        <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
                <p className='text-2xl font-bold'>DevLog Daily</p>
                <nav>
                    <ul className='flex gap-2'>
                        <li className='border-r-2 pe-2 border-gray-300 font-semibold'><a href="#">Sign up</a></li>
                        <li className='font-semibold'><a href="#">Register</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header