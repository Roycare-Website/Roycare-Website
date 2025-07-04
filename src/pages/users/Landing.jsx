import React, { useState } from "react";
import { ChevronUpSquareIcon } from "lucide-react";
import { Link } from "react-router"; // Corrected import for Link
import Product2 from "../../assets/images/product3.png";

const Landing = () => {
    const testimonials = [
        {
            name: "Dagny Amelia",
            role: "Professor",
            text: "Nibh praesent tristique magna sit amet. Pellentesque pulvinar habitant morbi.",
            rating: 5,
        },
        {
            name: "Judith Antonia",
            role: "Designer",
            text: "At tellus at urna condimentum. Purus in massa tempor nec feugiat nisl fusce id.",
            rating: 5,
        },
        {
            name: "Convallis A",
            role: "",
            text: "Convallis a vitae tempus nunc.",
            rating: 5,
        },
        // Add more testimonials if needed
    ];

    const products = [
        "Roycare Baby Skin Lotion",
        "Roycare Gentle Hair Shampoo",
        "Roycare Baby Laundry Detergent",
        "Roycare Fabric Softener",
        "Roycare Baby Body Wash",
        "Roycare Barrier Cream",
        "Roycare Baby Oil",
        "Roycare Gentle Hair Shampoo",
        "Roycare Baby Body Wash",
        "Roycare Fabric Softener",
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const testimonialsPerPage = 2;

    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
    const currentTestimonial = testimonials.slice(
        currentPage * testimonialsPerPage,
        (currentPage + 1) * testimonialsPerPage
    );

    const handlePrev = () => {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
    };

    return (
        <div className="w-full min-h-screen overflow-hidden">
            {/* Existing sections remain unchanged */}
            <section className="flex flex-col lg:flex-row w-full min-h-screen">
                {/* Left Panel */}
                <div className="w-full lg:w-1/3 h-64 lg:h-auto">
                    <img
                        src={Product2}
                        alt="Person applying serum"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Center Panel */}
                <div className="w-full lg:w-1/3 flex flex-col items-center justify-center text-center px-6 py-12 bg-[#FCD8D4]">
                    <span className="uppercase tracking-wider text-sm mb-4 text-black font-light">
                        Best Price
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-[#47603D] mb-6">
                        Care Today
                        <br />
                        Green Tomorrow
                    </h2>
                    <p className="text-black mb-10 max-w-md">
                        We invite you to join our movement: nurturing little ones with products that are pure, sustainable, and made with unconditional love. Because when it comes to babies, only the best — and greenest — will do
                    </p>
                    <button className="bg-[#47603D] text-white py-3 px-6 uppercase tracking-wider text-sm hover:bg-[#81a581] transition-colors duration-300 rounded-2xl">
                        — Shop —
                    </button>
                </div>

                {/* Right Panel */}
                <div className="w-full lg:w-1/3 h-64 lg:h-auto">
                    <img
                        src={Product2}
                        alt="Natural cosmetic products"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Scrolling Section */}
            <div className="bg-black py-4 overflow-hidden">
                <div className="flex animate-scroll w-max">
                    {[...products, ...products].map((product, index) => (
                        <div key={index} className="flex items-center px-4 whitespace-nowrap">
                            <span className="text-amber-100 text-sm font-medium">{product}</span>
                            <span className="text-amber-300 text-lg px-2">✦</span>
                        </div>
                    ))}
                </div>
                <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .animate-scroll {
      animation: scroll 20s linear infinite;
    }
    @media (max-width: 640px) {
      .animate-scroll {
        animation-duration: 30s;
      }
    }
  `}</style>
            </div>

            {/* Shop Categories */}
            <section className="px-4 sm:px-6 md:px-10 py-10">
                <h1 className="text-[#47603D] text-3xl md:text-4xl font-serif text-center mb-10">
                    Shop Categories
                </h1>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
                        >
                            <div className="h-72 p-4 flex items-center justify-center bg-white">
                                <img
                                    src={Product2}
                                    alt="Product"
                                    className="h-full object-contain"
                                />
                            </div>
                            <div className="p-6 flex flex-col items-center flex-1">
                                <div className="flex mb-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg
                                            key={star}
                                            className="w-4 h-4 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="uppercase text-sm font-bold tracking-wider text-[#6d2e2e] mb-1">
                                    {i === 1 ? "Baby Skincare" : i === 2 ? "Bath & Hygiene" : "Laundry & Home Care"}
                                </span>
                                <h3 className="text-lg font-medium text-center">
                                    {i === 1 ? "Premium baby skincare" : i === 2 ? "Baby shampoo sensitive skin" : "Organic baby detergent"}
                                </h3>
                                <button className="mt-4 bg-[#47603D] text-white py-2 px-4 w-full uppercase tracking-wider text-sm hover:bg-[#466C00] transition-colors duration-300 rounded-2xl">
                                    Select Options
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* single product */}
            <section className="w-screen h-screen flex flex-col md:flex-row overflow-hidden p-20">
                {/* Product Image */}
                <div className="w-full md:w-1/2 h-1/2 md:h-screen  bg-[url(assets/images/product2.png)] bg-no-repeat bg-cover bg-center relative"></div>
                {/* Product Details */}
                <div className="w-full md:w-1/2 h-1/2 md:h-screen bg-white flex flex-col justify-center p-8 md:p-16">
                    <div className="max-w-xl">
                        <span className="text-sm uppercase tracking-wider text-gray-500 mb-2 block">
                            Premium Collection
                        </span>
                        <h1 className="text-3xl md:text-5xl font-serif mb-4 text-[#47603D]">
                            Natural Moisturizing Cream
                        </h1>
                        <div className="flex items-center mb-6">
                            <div className="flex mr-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        className="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-gray-500 text-sm">42 Reviews</span>
                        </div>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Our premium moisturizing cream is formulated with natural
                            ingredients to hydrate and nourish your skin. This lightweight,
                            non-greasy formula absorbs quickly, leaving your skin feeling soft
                            and smooth. Perfect for daily use, this cream helps protect
                            against environmental stressors and improves skin texture.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                            <button className="bg-[#47603D] text-white py-3 px-8  hover:bg-[#466C00] transition-colors duration-300 flex-1 rounded-2xl">
                                Shop
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* testimonials */}
            <section className="w-full  bg-[#FCD8D4] mt-7  ">
                <div className="max-w-7xl mx-auto py-16 px-4 md:pt-8">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/3 mb-8 lg:mb-0">
                            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                Premium Clients
                            </h3>
                            <h2 className="text-4xl font-bold text-[#47603D] mt-2">
                                Testimonials & Review
                            </h2>
                            <p className="text-gray-600 mt-4">
                                Leo vel orci porta non pulvinar neque laoreet. Enim nulla
                                aliquet porttitor lacinia luctus.
                            </p>
                            <div className="mt-6 flex space-x-4">
                                <button
                                    onClick={handlePrev}
                                    className="bg-[#47603D] p-2 rounded-full hover:bg-gray-400"
                                    disabled={currentPage === 0}
                                >
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="bg-[#47603D] p-2 rounded-full hover:bg-gray-400"
                                    disabled={currentPage === totalPages - 1}
                                >
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:space-x-6">
                            {currentTestimonial.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-md flex-1 mb-6 sm:mb-0"
                                >
                                    <p className="text-gray-600 italic mb-4">
                                        {testimonial.text}
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                {testimonial.role}
                                            </p>
                                            <div className="flex mt-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className="w-5 h-5 text-yellow-400"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="w-full py-16 px-4 md:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#47603D]">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Find answers to common questions about our products, shipping,
                            returns, and more.
                        </p>
                    </div>
                    {/* FAQ Items */}
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>
                        <div className="mt-3 text-gray-600 pl-1 pr-7 pb-1 animate-fadeIn">
                            <p>
                                Yes, we use organic, sustainably sourced ingredients wherever
                                possible.
                            </p>
                        </div>
                    </details>
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>
                        <div className="mt-3 text-gray-600 pl-1 pr-7 pb-1 animate-fadeIn">
                            <p>Proudly made in Ghana.</p>
                        </div>
                    </details>
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>
                        <div className="mt-3 text-gray-600 pl-1 pr-7 pb-1 animate-fadeIn">
                            <p>
                                Yes, all Roycare products are dermatologically tested and safe
                                for babies from birth.
                            </p>
                        </div>
                    </details>
                </div>
            </section>

            {/* Contact */}
            <section className="flex flex-col md:flex-row w-full">
                {/* Left side - Company info */}
                <div className="w-full md:w-1/2 bg-[#FCD8D4] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg
                                width="300"
                                height="300"
                                viewBox="0 0 100 100"
                                className="text-[#47603D]"
                            >
                                <path
                                    d="M50 0 C60 20 80 20 90 10 C95 40 70 60 50 70 C30 60 5 40 10 10 C20 20 40 20 50 0"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="relative z-10">
                        <h3 className="uppercase tracking-widest text-black text-sm font-bold mb-3">
                            SATISFACTION GUARANTEE
                        </h3>
                        <h2 className="text-4xl font-serif text-[#47603D] mb-6">
                            Try Our Incredible
                            <br />
                            Baby shampoo sensitive skin.
                        </h2>
                        <p className="text-black mb-12">
                            Transform your hair naturally with our premium products. Made with
                            organic ingredients that nourish and strengthen every strand,
                            giving you the healthy, vibrant hair you deserve.
                        </p>
                    </div>
                </div>

                {/* Right side - Contact form */}
                <div className="w-full md:w-1/2 bg-[#47603D] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
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
                            className="bg-transparent border-b border-amber-200 text-amber-50 placeholder-amber-200 py-2 focus:outline-none focus:border-amber-100"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="bg-transparent border-b border-amber-200 text-amber-50 placeholder-amber-200 py-2 focus:outline-none focus:border-amber-100"
                        />
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number"
                            className="bg-transparent border-b border-amber-200 text-amber-50 placeholder-amber-200 py-2 focus:outline-none focus:border-amber-100"
                        />
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-full">
                                <input
                                    type="text"
                                    name="message"
                                    placeholder="How Can I Help You?"
                                    className="w-full bg-transparent border-b border-amber-200 text-amber-50 placeholder-amber-200 py-2 focus:outline-none focus:border-amber-100"
                                />
                            </div>
                            <div className="w-full">
                                <textarea
                                    name="details"
                                    placeholder="Your Messages"
                                    rows="1"
                                    className="w-full bg-transparent border-b border-amber-200 text-amber-50 placeholder-amber-200 py-2 focus:outline-none focus:border-amber-100 resize-none"
                                ></textarea>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button className="border border-amber-200 text-amber-100 px-10 py-3 uppercase tracking-wider text-sm inline-flex items-center hover:bg-[#FCD8D4] transition duration-300">
                                <span className="mr-2">-</span>
                                <span>SUBMIT NOW</span>
                                <span className="ml-2">-</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
