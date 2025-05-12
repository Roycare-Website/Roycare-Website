import React from "react";
import Product from "../assets/images/Alice.jpg";
import Leave from "../assets/images/leave.png";
import World from "../assets/images/globe.png";
import Bowl from "../assets/images/bowl.png";
import Bottle from "../assets/images/bottlebgr.png";
import Bottle1 from "../assets/images/bottlebgr1.png";
import { Compass, Target } from "lucide-react";

const About = () => {
  return (
    <div className="overflow-hidden">
      <div className="pt-20 flex flex-col justify-center min-h-86 bg-[#8FA46B] items-center">
        <h1 className="font-bold text-3xl">About</h1>
        <p>Home / About</p>
      </div>
      <section className="py-12 bg-white text-black pt-40">
        <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between min-h-screen">
          {/* Left Images */}
          <div className="w-[50%] h-screen">
            <img
              src={Product}
              alt="CEO Picture"
              className="rounded-2xl w-screen h-screen object-contain row-span-2"
            />
          </div>

          {/* Right Text Content */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-12">
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-2">
              Roycare Brand Story
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Born from Love, Inspired by Nature.
            </h2>
            <p className="mb-6 text-gray-700">
              Roycare was born out of a mother’s deep love and commitment to her
              child’s well-being. When our founder, Alice Frimpomaa Boateng,
              welcomed her son, Charles Roy Cleon Darkey Ocansey (affectionately
              called Roy), into the world, she searched for baby care products
              that were safe, gentle, and truly pure but found many filled with
              harsh chemicals and synthetic additives.
            </p>
            <p>
              Determined to create better, she envisioned Roycare: a premium
              baby care brand crafted with edible, plant-based, and natural
              ingredients, formulated to be as pure and gentle as a mother’s
              touch. Every Roycare product is thoughtfully developed to nurture
              delicate skin and hair, using nature’s finest gifts safe enough to
              trust on the ones we cherish the most.
              <br />
              At Roycare, purity, safety, and sustainability are not marketing
              words; they are our promises.
              <br />
            </p>
          </div>
        </div>
      </section>

      <section className="w-screen h-100 bg-[#4A7807] flex flex-col ">
        <div className="flex flex-col items-center pt-5">
          <h1 className="font-bold text-3xl">
            Roycare is proud to be a 100% Green Brand
          </h1>
          <p>We formulate all our baby care products using:</p>
        </div>
        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center items-center p-10">
          <div>
            <img src={Leave} alt="Sulfate-Free" className="mx-auto mb-2 h-20" />
            <p className="font-medium">Plant-Based Actives</p>
          </div>
          <div>
            <img src={World} alt="Paraben-Free" className="mx-auto mb-2 h-20" />
            <p className="font-medium">Earth-Friendly Manufacturing</p>
          </div>
          <div>
            <img src={Bowl} alt="100% Vegan" className="mx-auto mb-2 h-20" />
            <p className="font-medium">Edible-grade Ingredients</p>
          </div>
          <div>
            <img
              src={Bottle}
              alt="100% Vegan"
              className="mx-auto mb-2 h-20 shadow-xl"
            />
            <p className="font-medium">Biodegradable Wheat Straw Packaging</p>
          </div>
          <div>
            <img
              src={Bottle1}
              alt="100% Vegan"
              className="mx-auto mb-2 h-20 shadow-xl"
            />
            <p className="font-medium">Plastic-Free Commitment</p>
          </div>
          <div>
            <img
              src={Bowl}
              alt="100% Vegan"
              className="mx-auto mb-2 h-20 shadow-xl"
            />
            <p className="font-medium">Low-Carbon Footprint</p>
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

      <section className="py-16 bg-[#f9f7f3]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">
                I Give Growing Look
              </h3>
              <p className="text-gray-700 mb-4">
                Roycare shampoo is the only one I trust for my baby’s curls!
              </p>
              <p className="text-sm">
                <span className="text-rose-600 font-medium">Kath</span> –{" "}
                <span className="tracking-wider font-semibold">DESIGNER</span>
              </p>
              <div className="text-yellow-400 mt-2">★★★★★</div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">
                My Hair Looks Stylish
              </h3>
              <p className="text-gray-700 mb-4">
                Nibh praesent tristique eget aliquet magna sit. Mauris rhoncus
                aenean vel elit scelerisque. Pellentesque elit eget gravida cum.
              </p>
              <p className="text-sm">
                <span className="text-rose-600 font-medium">Kath</span> –{" "}
                <span className="tracking-wider font-semibold">DESIGNER</span>
              </p>
              <div className="text-yellow-400 mt-2">★★★★★</div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">100% Chemical Free</h3>
              <p className="text-gray-700 mb-4">
                Eget aliquet nibh praesent tristique magna sit. Mauris rhoncus
                aenean vel elit scelerisque. Pellentesque elit eget gravida cum.
              </p>
              <p className="text-sm">
                <span className="text-rose-600 font-medium">Kath</span> –{" "}
                <span className="tracking-wider font-semibold">DESIGNER</span>
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
