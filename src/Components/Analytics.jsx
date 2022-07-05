import React from 'react';
import Laptop from '../assets/img1.jpeg';

const Analytics = () => {
    return (
        <div className='md:flex md:justify-center md:items-center bg-white max-w-[1240px] md:m-auto'>
            <img src={Laptop} className='w-[400px] mx-auto my-4' alt='/' />
            <div className='md:max-w-[840px] md:mt-10 px-5'>
                <p className='uppercase text-teal-600'>Data Analytics Dashboard</p>
                <h1 className='md:text-2xl text-xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='flex md:block justify-center md:justify-left'>
                    <button className='bg-[teal] w-[200px] rounded-md font-medium my-6 py-3 text-black '>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Analytics