import React, { useState } from 'react'
import { ChevronUpSquareIcon, Droplet, Eye, Heart, HeartIcon } from 'lucide-react';
import { Link } from 'react-router';
import Product from "../assets/images/product1.png"

const Landing = () => {



    return (
        <div className=" w-full  min-h-screen">
            <section className='flex flex-col md:flex-row'>
                {/* Left panel - Person using product */}
                <div className="w-full h-screen md:w-1/3 bg-[#163A12] p-6 flex items-center justify-center">
                    <div className="relative">
                        <img src="" alt="image goes here" />
                    </div>
                </div>

                {/* Center panel - Text and call to action */}
                <div className="w-full min-h-screen md:w-1/3 p-8 flex flex-col items-center justify-center text-center">
                    <p className="uppercase tracking-widest text-amber-800 text-sm font-bold mb-2">BEST QUALITY</p>

                    <h2 className="text-4xl font-serif text-amber-900 mb-4">Born from Love<br />Inspired by Nature</h2>

                    <p className="text-amber-700 mb-6">
                        Roycare was born out of a mother’s deep love and commitment to her child's well-being
                    </p>

                    <button className="bg-[#163A12] text-amber-50 px-8 py-3 uppercase tracking-wider text-sm flex items-center">
                        <span>EXPLORE MORE</span>
                        <span className="ml-2">—</span>
                    </button>

                    <div className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                            <Droplet size={40} className="text-amber-200 opacity-50" />
                        </div>
                        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
                            <Droplet size={40} className="text-amber-200 opacity-50" />
                        </div>
                    </div>
                </div>

                {/* Right panel - Product display */}
                <div className="w-full md:w-1/3 bg-[#163A12] p-6 flex items-center justify-center">
                    <div className="relative">
                        <img src="" alt="image" />
                    </div>
                </div>
            </section>

            {/* Featured Ads */}
            <div className="bg-gray-50 py-10">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-blue-900 mb-4">Featured Ads</h2>
                        <h2 className="text-xl font-bold text-blue-900 mb-4">Want to view all products?
                         <Link className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-md transition" to="/login">Login</Link></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {/* phones */}
                        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div class="h-40 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src={Product}
                                    alt="phone"
                                />
                            </div>
                            <div class="p-4">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                                        Phones
                                    </span>
                                    <button class="focus:outline-none">
                                        <HeartIcon />
                                    </button>
                                </div>
                                <h3 class="text-blue-500 font-medium text-lg mb-1">
                                    Own A New Phone
                                </h3>
                                <p class="text-gray-600 text-sm mb-2">Plot No.7, Buro Osu</p>
                                <div class="flex items-center">
                                    <div class="flex mr-1 list-none">
                                        <li>⭐</li>
                                        <li>⭐</li>
                                        <li>⭐</li>
                                        <li>⭐</li>
                                    </div>
                                    <span class="text-gray-600 text-sm">(3 Reviews)</span>
                                </div>
                            </div>
                        </div>

                        {/* accessories */}
                        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div class="h-40 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src={Product}
                                    alt="accessories"
                                />
                            </div>
                            <div class="p-4">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                                        Accessories
                                    </span>
                                    <button class="focus:outline-none">
                                        <HeartIcon />
                                    </button>
                                </div>
                                <h3 class="text-blue-500 font-medium text-lg mb-1">
                                    Great assets just for you
                                </h3>
                                <p class="text-gray-600 text-sm mb-2">Plot No.7, Buro Osu</p>
                                <div class="flex items-center">
                                    <div class="flex mr-1 list-none">
                                        <li>⭐</li>
                                        <li>⭐</li>
                                        <li>⭐</li>
                                        <li>⭐</li>
                                    </div>
                                    <span class="text-gray-600 text-sm">(3 Reviews)</span>
                                </div>
                            </div>
                        </div>
                        {/* headphones */}
                        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div class="h-40 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src={Product}
                                    alt="headphone"
                                />
                            </div>
                            <div class="p-4">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                                        Headphones
                                    </span>
                                    <button class="focus:outline-none">
                                        <HeartIcon />
                                    </button>
                                </div>
                                <h3 class="text-blue-500 font-medium text-lg mb-1">
                                    Jam To The Music
                                </h3>
                                <p class="text-gray-600 text-sm mb-2">Plot No.7, Buro Osu</p>
                                <div class="flex items-center">
                                    <div class="flex mr-1 list-none">
                                        <li>⭐</li>
                                        <li>⭐</li>
                                        <li>⭐</li>
                                        <li>⭐</li>
                                    </div>
                                    <span class="text-gray-600 text-sm">(4 Reviews)</span>
                                </div>
                            </div>
                        </div>
                        {/* laptop */}
                        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div class="h-40 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src={Product}
                                    alt="laptop"
                                />
                            </div>
                            <div class="p-4">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                                        Laptops
                                    </span>
                                    <button class="focus:outline-none">
                                        <HeartIcon />
                                    </button>
                                </div>
                                <h3 class="text-blue-500 font-medium text-lg mb-1">
                                    Play with the keys
                                </h3>
                                <p class="text-gray-600 text-sm mb-2">Plot No.7, Buro Osu</p>
                                <div class="flex items-center">
                                    <div class="flex mr-1 list-none">
                                        <li>⭐</li>
                                        <li>⭐</li>
                                        <li>⭐</li>
                                        <li>⭐</li>
                                    </div>
                                    <span class="text-gray-600 text-sm">(2 Reviews)</span>
                                </div>
                            </div>
                        </div>
                        {/* watches */}
                        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div class="h-40 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src={Product}
                                    alt="watch"
                                />
                            </div>
                            <div class="p-4">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                                        Smartwatches
                                    </span>
                                    <button class="focus:outline-none">
                                        <HeartIcon />
                                    </button>
                                </div>
                                <h3 class="text-blue-500 font-medium text-lg mb-1">
                                    Life made simple
                                </h3>
                                <p class="text-gray-600 text-sm mb-2">Plot No.7, Buro Osu</p>
                                <div class="flex items-center">
                                    <div class="flex mr-1 list-none">
                                        <li>⭐</li>
                                        <li>⭐</li>
                                        <li>⭐</li>
                                        <li>⭐</li>
                                    </div>
                                    <span class="text-gray-600 text-sm">(5 Reviews)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='flex flex-col md:flex-row w-full'>
                {/* Left side - Company info */}
                <div className="w-full md:w-1/2 bg-amber-50 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg width="300" height="300" viewBox="0 0 100 100" className="text-amber-800">
                                <path d="M50 0 C60 20 80 20 90 10 C95 40 70 60 50 70 C30 60 5 40 10 10 C20 20 40 20 50 0"
                                    fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </svg>
                        </div>
                    </div>

                    <div className="relative z-10">
                        <h3 className="uppercase tracking-widest text-amber-800 text-sm font-bold mb-3">
                            SATISFACTION GUARANTEE
                        </h3>

                        <h2 className="text-4xl font-serif text-amber-900 mb-6">
                            Try Our Incredible<br />
                            Baby shampoo sensitive skin.
                        </h2>

                        <p className="text-amber-700 mb-12">
                            Transform your hair naturally with our premium products.
                            Made with organic ingredients that nourish and strengthen
                            every strand, giving you the healthy, vibrant hair you deserve.
                        </p>

                        {/* <div className="mt-8">
        <p className="text-amber-800 mb-2">Monday - Thursday : 11AM - 5PM</p>
        <p className="text-amber-800 mb-2">Friday - Sunday : 10AM - 5PM</p>
        <p className="text-amber-800">Sunday : Holiday</p>
      </div> */}
                    </div>
                </div>

                {/* Right side - Contact form */}
                <div className="w-full md:w-1/2 bg-[#163A12] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                    <h3 className="uppercase tracking-widest text-amber-100 text-sm font-bold mb-3">
                        CONTACT US
                    </h3>

                    <h2 className="text-4xl font-serif text-amber-50 mb-10">
                        Keep In Touch
                    </h2>

                    <div className="flex flex-col space-y-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            // value={formData.name}
                            // onChange={handleChange}
                            className="bg-transparent border-b border-amber-200 text-amber-50 placeholder-amber-200 py-2 focus:outline-none focus:border-amber-100"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            // value={formData.email}
                            // onChange={handleChange}
                            className="bg-transparent border-b border-amber-200 text-amber-50 placeholder-amber-200 py-2 focus:outline-none focus:border-amber-100"
                        />

                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number"
                            // value={formData.mobile}
                            // onChange={handleChange}
                            className="bg-transparent border-b border-amber-200 text-amber-50 placeholder-amber-200 py-2 focus:outline-none focus:border-amber-100"
                        />

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-full">
                                <input
                                    type="text"
                                    name="message"
                                    placeholder="How Can I Help You?"
                                    // value={formData.message}
                                    // onChange={handleChange}
                                    className="w-full bg-transparent border-b border-amber-200 text-amber-50 placeholder-amber-200 py-2 focus:outline-none focus:border-amber-100"
                                />
                            </div>

                            <div className="w-full">
                                <textarea
                                    name="details"
                                    placeholder="Your Messages"
                                    rows="1"
                                    // value={formData.details}
                                    // onChange={handleChange}
                                    className="w-full bg-transparent border-b border-amber-200 text-amber-50 placeholder-amber-200 py-2 focus:outline-none focus:border-amber-100 resize-none"
                                ></textarea>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                //   onClick={handleSubmit} 
                                className="border border-amber-200 text-amber-100 px-10 py-3 uppercase tracking-wider text-sm inline-flex items-center hover:bg-amber-800 transition duration-300"
                            >
                                <span className="mr-2">-</span>
                                <span>SUBMIT NOW</span>
                                <span className="ml-2">-</span>
                            </button>
                        </div>
                    </div>

                    <div className="absolute bottom-6 right-6">
                        <button className="p-2 bg-amber-800 rounded-full text-amber-100 hover:bg-amber-700 transition duration-300">
                            <ChevronUpSquareIcon size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing
