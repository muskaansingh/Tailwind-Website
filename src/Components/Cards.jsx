import React from 'react';
import SingleUser from '../assets/img2.jpeg';

const Cards = () => {
    return (
        <div className='md:flex md:justify-between md:max-w-[1240px] md:m-auto md:py-16 p-5'>
            {[0, 0, 0].map(() => (
                <div class="max-w-sm rounded overflow-hidden shadow-lg mb-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300 ...">
                    <img class="w-full h-[220px]" src={SingleUser} alt="Single User" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Single User</div>
                        <p>$556</p>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards