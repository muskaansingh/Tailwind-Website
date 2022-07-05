import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px] text-white'>
            <h1 className='text-3xl font-bold text-teal-600'>
                React
            </h1>
            <ul className='hidden md:flex'>
                <li className='p-5 cursor-pointer'>Home</li>
                <li className='p-5 cursor-pointer'>Dashboard</li>
                <li className='p-5 cursor-pointer'>About Us</li>
                <li className='p-5 cursor-pointer'>Resources</li>
                <li className='p-5 cursor-pointer'>Contact Us</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-teal-600 m-4'>
                    React
                </h1>
                <ul className='uppercase p-4'>
                    <li className='p-5 font-normal border-b border-gray-600 cursor-pointer'>Home</li>
                    <li className='p-5 font-normal border-b border-gray-600 cursor-pointer'>Dashboard</li>
                    <li className='p-5 font-normal border-b border-gray-600 cursor-pointer'>About Us</li>
                    <li className='p-5 font-normal border-b border-gray-600 cursor-pointer'>Resources</li>
                    <li className='p-5 font-normal cursor-pointer'>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar