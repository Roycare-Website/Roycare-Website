import React, { useState } from 'react'
import { ChevronUpSquareIcon, Droplet, Eye, Heart, HeartIcon } from 'lucide-react';
import { Link } from 'react-router';
import Product from "../assets/images/product2.png"
import Product2 from "../assets/images/product3.png"
import Shop from './Shop';

const Landing = () => {



    return (
        <div className=" w-full  min-h-screen overflow-hidden ">
            <section className='flex flex-col md:flex-row w-full bg-[#466C00] overflow-hidden max-h-full'>
                {/* Left Panel - Person with Product */}
                <div className="w-full md:w-1/3 relative">
                    <img
                        src={Product2}
                        alt="Person applying serum"
                        width={450}
                        height={600}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Center Panel - Text Content */}
                <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center px-8 py-12 relative">
                    <span className="uppercase tracking-wider text-sm  mb-4 text-white font-light">Best Price</span>

                    <h2 className="text-4xl font-serif text-white mb-6">
                        Care Today
                        <br />
                        Green Tomorrow
                    </h2>

                    <p className="text-white mb-10 max-w-xs">
                        We invite you to join our movement: nurturing little ones with products that are pure, sustainable, and made with unconditional love. Because when it comes to babies, only the best — and greenest — will do
                    </p>

                    <button className="bg-black text-white py-3 px-8 uppercase tracking-wider text-sm flex items-center space-x-2 hover:bg-[#b3dfb5] transition-colors duration-300">
                        <span>Shop</span>
                        <span>—</span>
                    </button>
                </div>

                {/* Right Panel - Product Display */}
                <div className="w-full md:w-1/3 relative">
                    <img
                        src={Product2}
                        alt="Natural cosmetic products on wooden board"
                        width={450}
                        height={600}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            <section>
                <h1 className="text-[#466C00] text-4xl font-serif text-center mb-12 p-20">Shop Categories</h1>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Product 1 */}
                    <div className="h-full  rounded-lg overflow-hidden flex flex-col shadow-xl/30">
                        <div className="h-80 p-8 flex items-center justify-center ">
                            <img
                                src={Product2}
                                alt="Oil-Free Liquid Foundation"
                                className="h-full object-contain"
                            />
                        </div>

                        <div className="p-6 flex flex-col items-center">
                            <div className="flex mb-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <span className="uppercase text-sm font-bold tracking-wider text-[#6d2e2e] mb-1"> Baby Skincare</span>
                            <h3 className="text-xl font-medium text-center">Premium baby skincare
                            </h3>

                            <button className="mt-4 bg-black text-white py-3 px-6 w-full uppercase tracking-wider text-sm hover:bg-[#466C00] transition-colors duration-300">
                                Select Options
                            </button>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className=" rounded-lg overflow-hidden flex flex-col relative shadow-xl/30">
                        <div className="h-80 p-8 flex items-center justify-center bg-white">
                            <img
                                src={Product2}
                                alt="Full Coverage Liquid Foundation"
                                className="h-full object-contain"
                            />
                        </div>

                        <div className="p-6 flex flex-col items-center">
                            <div className="flex mb-2">
                                {[1, 2, 3].map((star) => (
                                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                {[1, 2].map((star) => (
                                    <svg key={star} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <span className="uppercase text-sm font-bold tracking-wider text-[#6d2e2e] mb-1">Bath & Hygiene</span>
                            <h3 className="text-xl font-medium text-center">Baby shampoo sensitive skin</h3>

                            <button className="mt-4 bg-black text-white py-3 px-6 w-full uppercase tracking-wider text-sm hover:bg-[#466C00] transition-colors duration-300">
                                Select Options
                            </button>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className=" rounded-lg overflow-hidden flex flex-col relative shadow-xl/30">
                        <div className="h-80 p-8 flex items-center justify-center bg-white">
                            <img
                                src={Product2}
                                alt="Ultra Dry Skin Moisturizer"
                                className="h-full object-contain"
                            />
                        </div>

                        <div className="p-6 flex flex-col items-center">
                            <div className="flex mb-2">
                                {[1, 2, 3].map((star) => (
                                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                {[1, 2].map((star) => (
                                    <svg key={star} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <span className="uppercase text-sm font-bold tracking-wider text-[#6d2e2e] mb-1"> Laundry & Home Care</span>
                            <h3 className="text-xl font-medium text-center">Organic baby detergent</h3>

                            <button className="mt-4 bg-black text-white py-3 px-6 w-full uppercase tracking-wider text-sm hover:bg-[#466C00] transition-colors duration-300">
                                Select Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-screen h-screen flex flex-col md:flex-row overflow-hidden pt-20">
                {/* Product Image */}
                <div className="w-full md:w-1/2 h-1/2 md:h-screen bg-[url(assets/images/product2.png)] bg-no-repeat bg-cover bg-center relative">

                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2 h-1/2 md:h-screen bg-white flex flex-col justify-center p-8 md:p-16">
                    <div className="max-w-xl">
                        <span className="text-sm uppercase tracking-wider text-gray-500 mb-2 block">Premium Collection</span>
                        <h1 className="text-3xl md:text-5xl font-serif mb-4">Natural Moisturizing Cream</h1>

                        <div className="flex items-center mb-6">
                            <div className="flex mr-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-gray-500 text-sm">42 Reviews</span>
                        </div>

                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Our premium moisturizing cream is formulated with natural ingredients to hydrate and nourish your skin. This
                            lightweight, non-greasy formula absorbs quickly, leaving your skin feeling soft and smooth. Perfect for
                            daily use, this cream helps protect against environmental stressors and improves skin texture.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                            <button className="bg-black text-white py-3 px-8 rounded-md hover:bg-[#466C00] transition-colors duration-300 flex-1">
                                Shop
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 px-4 md:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Find answers to common questions about our products, shipping, returns, and more.
                        </p>
                    </div>

                    {/* FAQ Item 1 */}
                    <details className="border-b border-gray-200 py-5 group transition-all duration-200 hover:bg-gray-50 rounded-md px-4">
                        <summary className="text-lg font-medium cursor-pointer list-none flex justify-between items-center">
                            <span>Are Roycare ingredients organic?</span>
                            <svg
                                className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <div className="mt-3 text-gray-600 pl-1 pr-7 pb-1 animate-fadeIn">
                            <p>
                             Yes, we use organic, sustainably sourced ingredients wherever possible.
                            </p>
                        </div>
                    </details>

                    {/* FAQ Item 2 */}
                    <details className="border-b border-gray-200 py-5 group transition-all duration-200 hover:bg-gray-50 rounded-md px-4">
                        <summary className="text-lg font-medium cursor-pointer list-none flex justify-between items-center">
                            <span>Where is Roycare made?</span>
                            <svg
                                className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <div className="mt-3 text-gray-600 pl-1 pr-7 pb-1 animate-fadeIn">
                            <p>
                            Proudly made in Ghana.
                            </p>
                        </div>
                    </details>

                    {/* FAQ Item 3 */}
                    <details className="border-b border-gray-200 py-5 group transition-all duration-200 hover:bg-gray-50 rounded-md px-4">
                        <summary className="text-lg font-medium cursor-pointer list-none flex justify-between items-center">
                            <span>Are Roycare products safe for newborns?</span>
                            <svg
                                className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <div className="mt-3 text-gray-600 pl-1 pr-7 pb-1 animate-fadeIn">
                            <p>
                            Yes, all Roycare products are dermatologically tested and safe for babies from birth.
                            </p>
                        </div>
                    </details>
                </div>
            </section>


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
