import React from 'react';
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='text-white bg-black py-10 px-5 text-center'>
                <div className='md:max-w-[1240px] md:m-auto'>
                    <h1 className='text-2xl text-[teal]'>React!</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                    <div className='flex justify-center m-4'>
                        <FaFacebookSquare size={30} />
                        <FaInstagram size={30} />
                        <FaTwitterSquare size={30} />
                        <FaGithubSquare size={30} />
                        <FaDribbbleSquare size={30} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer