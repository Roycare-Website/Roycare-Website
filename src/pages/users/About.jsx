import React from "react";
import Alice from "../../assets/images/alice.jpg";
import Leave from "../../assets/images/leave.png";
import World from "../../assets/images/globe.png";
import Edible from "../../assets/images/edible.png";
import Bottle from "../../assets/images/bottle.png";
import Bag from "../../assets/images/bag.png";
import Carbon from "../../assets/images/carbon.png";
import Sprofile from "../../assets/images/sprofile.jpg";
import Product from "../../assets/images/product3.png";
import { Compass, Target } from "lucide-react";

const About = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col justify-center min-h-86 bg-[#4A7807] items-center">
        <h1 className="font-bold text-3xl text-white">About</h1>
        <p className="text-white">Home / About</p>
      </div>
      <section className="py-12 bg-white text-black">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center min-h-screen">

          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <img
              src={Alice}
              alt="CEO Picture"
              className="rounded-t-full w-full h-auto object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-2">
              Roycare Brand Story
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#4A7807]">
              Born from Love, Inspired by Nature.
            </h2>
            <p className="mb-6 text-base sm:text-lg">
              Roycare was born out of a mother’s deep love and commitment to her
              child’s well-being. When our founder, Alice Frimpomaa Boateng,
              welcomed her son, Charles Roy Cleon Darkey Ocansey (affectionately
              called Roy), into the world, she searched for baby care products
              that were safe, gentle, and truly pure but found many filled with
              harsh chemicals and synthetic additives.
            </p>
            <p className="text-base font-light sm:text-lg">
              Determined to create better, she envisioned Roycare: a premium
              baby care brand crafted with edible, plant-based, and natural
              ingredients, formulated to be as pure and gentle as a mother’s
              touch. Every Roycare product is thoughtfully developed to nurture
              delicate skin and hair, using nature’s finest gifts safe enough to
              trust on the ones we cherish the most.
              <br />
              At Roycare, purity, safety, and sustainability are not marketing
              words; they are our promises.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#4A7807] py-10 px-4">
        <div className="text-center mb-8">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-snug">
            Roycare is proud to be a 100% Green Brand
          </h1>
          <p className="text-white mt-2 text-sm sm:text-base">
            We formulate all our baby care products using:
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="text-center">
            <img src={Leave} alt="Plant-Based Actives" className="mx-auto mb-2 h-16 sm:h-20" />
            <p className="font-medium text-white text-sm sm:text-base">Plant-Based Actives</p>
          </div>
          <div className="text-center">
            <img src={World} alt="Earth-Friendly Manufacturing" className="mx-auto mb-2 h-16 sm:h-20" />
            <p className="font-medium text-white text-sm sm:text-base">Earth-Friendly Manufacturing</p>
          </div>
          <div className="text-center">
            <img src={Edible} alt="Edible-grade Ingredients" className="mx-auto mb-2 h-16 sm:h-20" />
            <p className="font-medium text-white text-sm sm:text-base">Edible-grade Ingredients</p>
          </div>
          <div className="text-center">
            <img src={Bottle} alt="Biodegradable Packaging" className="mx-auto mb-2 h-16 sm:h-20 shadow-xl" />
            <p className="font-medium text-white text-sm sm:text-base">Biodegradable Wheat Straw Packaging</p>
          </div>
          <div className="text-center">
            <img src={Bag} alt="Plastic-Free Commitment" className="mx-auto mb-2 h-16 sm:h-20 shadow-xl" />
            <p className="font-medium text-white text-sm sm:text-base">Plastic-Free Commitment</p>
          </div>
          <div className="text-center">
            <img src={Carbon} alt="Low-Carbon Footprint" className="mx-auto mb-2 h-16 sm:h-20 shadow-xl" />
            <p className="font-medium text-white text-sm sm:text-base">Low-Carbon Footprint</p>
          </div>
        </div>
      </section>


      <section className="w-full py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Purpose</h2>
            <div className="w-20 h-1 bg-[#4A7807] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Mission Div */}
            <div className="bg-gray-50 rounded-lg p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Compass className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>

              <p className="text-gray-700 mb-6 flex-grow">
                To create safe, chemical-free, and luxurious baby care solutions
                for hair, skin, laundry, and beyond inspired by love and a
                passion for protecting the future generation.
              </p>

              <div className="mt-auto">
                <h4 className="font-semibold text-lg mb-3">
                  We are committed to:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>
                      Creating products that are safe, effective, and kind to
                      the planet
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>
                      Transparency in our ingredient sourcing and manufacturing
                      processes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>
                      Supporting fair trade practices and ethical labor
                      standards
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision Div */}
            <div className="bg-gray-50 rounded-lg p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>

              <p className="text-gray-700 mb-6 flex-grow">
                To nurture babies across Africa and the world with premium,
                natural, and sustainable baby products.
              </p>

              <div className="mt-auto">
                <h4 className="font-semibold text-lg mb-3">
                  By 2030, we aim to:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      Achieve carbon neutrality across our entire supply chain
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      Use 100% recyclable or biodegradable packaging for all
                      products
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      Establish regenerative farming practices for all botanical
                      ingredients
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundColor: "#4A7807",
        }}
        aria-labelledby="statistics-heading"
      >
        {/* Background overlay for texture */}
        <div className="absolute inset-0 bg-[#4A7807] bg-opacity-20"></div>

        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 id="statistics-heading" className="sr-only">Company Statistics</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white divide-opacity-20">

            {/* Satisfied Customers */}
            <div className="flex flex-col items-center justify-center p-8 text-white transition-all duration-500 ease-in-out
                     hover:bg-black hover:bg-opacity-10 hover:scale-105 hover:shadow-2xl
                     cursor-pointer group border-r border-white border-opacity-20 last:border-r-0">
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  className="text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="m22 21-3-3m0 0a5.5 5.5 0 1 1-7.8-7.8 5.5 5.5 0 0 1 7.8 7.8Z" />
                </svg>
              </div>
              <div className="text-5xl font-bold mb-2 tracking-tight group-hover:text-amber-200 transition-colors duration-300">
                25K
              </div>
              <div className="text-sm uppercase tracking-widest font-medium opacity-90 text-center leading-tight
                        group-hover:opacity-100 transition-opacity duration-300">
                Satisfied Customers
              </div>
            </div>

            {/* Beauty Products */}
            <div className="flex flex-col items-center justify-center p-8 text-white transition-all duration-500 ease-in-out
                     hover:bg-black hover:bg-opacity-10 hover:scale-105 hover:shadow-2xl
                     cursor-pointer group border-r border-white border-opacity-20 last:border-r-0">
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  className="text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <path d="M12 2v20m8-10H4" />
                  <rect x="3" y="6" width="18" height="12" rx="2" />
                  <rect x="7" y="10" width="10" height="4" rx="1" />
                </svg>
              </div>
              <div className="text-5xl font-bold mb-2 tracking-tight group-hover:text-amber-200 transition-colors duration-300">
                50
              </div>
              <div className="text-sm uppercase tracking-widest font-medium opacity-90 text-center leading-tight
                        group-hover:opacity-100 transition-opacity duration-300">
                Baby Products
              </div>
            </div>

            {/* Stores Worldwide */}
            <div className="flex flex-col items-center justify-center p-8 text-white transition-all duration-500 ease-in-out
                     hover:bg-black hover:bg-opacity-10 hover:scale-105 hover:shadow-2xl
                     cursor-pointer group border-r border-white border-opacity-20 last:border-r-0">
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  className="text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  <rect x="6" y="8" width="12" height="4" />
                  <rect x="8" y="6" width="8" height="2" />
                </svg>
              </div>
              <div className="text-5xl font-bold mb-2 tracking-tight group-hover:text-amber-200 transition-colors duration-300">
                6
              </div>
              <div className="text-sm uppercase tracking-widest font-medium opacity-90 text-center leading-tight
                        group-hover:opacity-100 transition-opacity duration-300">
                Countries
              </div>
            </div>

            {/* Total Sales */}
            <div className="flex flex-col items-center justify-center p-8 text-white transition-all duration-500 ease-in-out
                     hover:bg-black hover:bg-opacity-10 hover:scale-105 hover:shadow-2xl
                     cursor-pointer group border-r border-white border-opacity-20 last:border-r-0">
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  className="text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
                </svg>
              </div>
              <div className="text-5xl font-bold mb-2 tracking-tight group-hover:text-amber-200 transition-colors duration-300">
                15K
              </div>
              <div className="text-sm uppercase tracking-widest font-medium opacity-90 text-center leading-tight
                        group-hover:opacity-100 transition-opacity duration-300">
                Total Sales
              </div>
            </div>

            {/* Year of Experience */}
            <div className="flex flex-col items-center justify-center p-8 text-white transition-all duration-500 ease-in-out
                     hover:bg-black hover:bg-opacity-10 hover:scale-105 hover:shadow-2xl
                     cursor-pointer group border-r border-white border-opacity-20 last:border-r-0">
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  className="text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <circle cx="12" cy="8" r="6" />
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                  <circle cx="12" cy="8" r="2" />
                </svg>
              </div>
              <div className="text-5xl font-bold mb-2 tracking-tight group-hover:text-amber-200 transition-colors duration-300">
                5
              </div>
              <div className="text-sm uppercase tracking-widest font-medium opacity-90 text-center leading-tight
                        group-hover:opacity-100 transition-opacity duration-300">
                Year of Experience
              </div>
            </div>

          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent opacity-20"></div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Core Values
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            At Roycare, our mission is guided by unwavering principles that
            define our culture and commitment to families.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#4A7807] mb-2">
                Safety First
              </h3>
              <p className="text-gray-600">
                No compromises — only gentle, toxin-free formulas that protect
                delicate baby skin.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#4A7807] mb-2">
                Plant-Powered Purity
              </h3>
              <p className="text-gray-600">
                We use only nature’s best — organic oils, herbal extracts, and
                biodegradable ingredients.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#4A7807] mb-2">
                Mother-Led Integrity
              </h3>
              <p className="text-gray-600">
                Created by a mother, for mothers — with honesty, passion, and
                purpose.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#4A7807] mb-2">
                Love in Every Drop
              </h3>
              <p className="text-gray-600">
                Every Roycare product is a celebration of life’s most precious
                beginnings.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#4A7807] mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600">Sustainability</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Meet the Roycare Family
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            A committed team ensuring every Roycare product embodies love, care,
            and nature.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-md">
              <img
                src={Alice} // Replace with actual image path
                alt="Alice Frimpomaa Boateng"
                className="w-32 h-32 object-cover rounded-full border-4 border-[#4A7807] mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Alice Frimpomaa Boateng
              </h3>
              <p className="text-sm text-gray-500">Founder & CEO</p>
              <p>
                Alice is a green cosmetics formulator and the visionary behind
                Roycare. She holds a background in business and a passion for
                sustainability. After losing her aunt to skin cancer, Alice made
                it her life’s mission to create safe, natural alternatives in
                the beauty industry. Her personal journey into motherhood led
                her to develop Roycare a brand shaped by five years of research,
                clean formulations, and deep maternal love. She is also the
                founder of AFB Golden Enterprise and a strong advocate for skin
                health and eco-friendly innovation in Africa.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-md">
              <img
                src="/assets/images/john.jpg" // Replace with actual image path
                alt="John Mensah"
                className="w-32 h-32 object-cover rounded-full border-4 border-[#4A7807] mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Charles-Roy Cleon
              </h3>
              <p className="text-sm text-gray-500">Baby Brand Ambassador</p>
              <p>
                The joy behind the journey. Charles-Roy is the inspiration for
                Roycare’s existence and the reason we believe every baby
                deserves the purest start. His presence reminds us daily why
                love and care should be at the heart of everything we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f9f7f3]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={Sprofile} // Replace with actual path
                  alt="Kath"
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div className="text-sm">
                  <span className="text-rose-600 font-medium">Kath</span> –{" "}
                  <span className="tracking-wider font-semibold">DESIGNER</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4 pt-8">
                Roycare shampoo is the only one I trust for my baby’s curls!
              </p>
              <div className="text-yellow-400 mt-2">★★★★★</div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={Sprofile} // Replace with actual path
                  alt="Kath"
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div className="text-sm">
                  <span className="text-rose-600 font-medium">Kath</span> –{" "}
                  <span className="tracking-wider font-semibold">DESIGNER</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4 pt-8">
                The Roycare laundry detergent keeps my baby’s clothes soft and
                chemical-free.
              </p>
              <div className="text-yellow-400 mt-2">★★★★★</div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={Sprofile} // Replace with actual path
                  alt="Kath"
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div className="text-sm">
                  <span className="text-rose-600 font-medium">Kath</span> –{" "}
                  <span className="tracking-wider font-semibold">DESIGNER</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4 pt-8">
                Roycare shampoo is the only one I trust for my baby’s curls!
              </p>
              <div className="text-yellow-400 mt-2">★★★★★</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
