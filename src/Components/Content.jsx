import React from 'react';
import Typed from 'react-typed';

const Content = () => {
    return (
        <div>
            <div className='max-w-[800px] mt-[-95px] w-full h-screen mx-auto
            text-center flex flex-col justify-center text-white'>
                <p className='text-teal-600 text-bold p-2'>Growing With Data Analytics</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow With Data.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for </p>
                    <Typed
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                        strings={['BTB', 'BTC', 'SASS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB,
                    BTC and SASS platforms.
                </p>
                <button className='bg-[teal] w-[200px] m-auto py-3 font-medium rounded-md my-6 text-black'>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Content