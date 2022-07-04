import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className='flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px]'>
            <h1 className='text-3xl font-bold text-teal-600'>
                React
            </h1>
            <ul className='hidden md:flex'>
                <li className='p-5'>Home</li>
                <li className='p-5'>Dashboard</li>
                <li className='p-5'>About Us</li>
                <li className='p-5'>Resources</li>
                <li className='p-5'>Contact Us</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-teal-600 m-4'>
                    React
                </h1>
                <ul className='uppercase p-4'>
                    <li className='p-5 font-normal border-b border-gray-600'>Home</li>
                    <li className='p-5 font-normal border-b border-gray-600'>Dashboard</li>
                    <li className='p-5 font-normal border-b border-gray-600'>About Us</li>
                    <li className='p-5 font-normal border-b border-gray-600'>Resources</li>
                    <li className='p-5 font-normal'>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar