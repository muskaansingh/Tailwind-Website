import React from 'react';
import SingleUser from '../assets/img2.jpeg';
import DoubleUser from '../assets/img3.jpeg';
import TripleUser from '../assets/img4.jpeg';

const Cards = () => {
    return (
        <div className='md:flex md:justify-between md:max-w-[1240px] md:m-auto md:py-16 p-5'>
            <div class="max-w-sm rounded overflow-hidden shadow-lg mb-5">
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
            <div class="max-w-sm rounded overflow-hidden shadow-lg mb-5">
                <img class="w-full h-[220px]" src={DoubleUser} alt="Single User" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Double User</div>
                    <p>$432</p>
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
            <div class="max-w-sm rounded overflow-hidden shadow-lg mb-5">
                <img class="w-full h-[220px]" src={TripleUser} alt="Single User" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Triple User</div>
                    <p>$126</p>
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
        </div>
    )
}

export default Cards