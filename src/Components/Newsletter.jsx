import React from 'react'

const Newsletter = () => {
    return (
        <div className='text-white bg-black py-16 px-5'>
            <div className='md:max-w-[1240px] md:m-auto md:flex md:justify-between md:items-baseline'>
                <div className='md:mr-20'>
                    <h1 className='text-2xl'>Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date</p>
                </div>
                <div>
                    <input class="shadow appearance-none border rounded w-full mt-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-[300px] mr-[20px]" type="text" />
                    <button className='bg-[teal] w-[150px] rounded-md font-medium my-4 py-2 text-black '> Notify Me! </button>
                    <p>
                        We care about the protection of your data. Read our
                        <a className='text-[teal] underline cursor-pointer'> Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter