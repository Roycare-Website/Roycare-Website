import { Instagram, Linkedin, Youtube } from 'lucide-react'
import React from 'react'
import { FaFacebook, FaSnapchat, FaSnapchatGhost, FaTiktok } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="w-full min-h-screen py-16 px-4 md:px-8 bg-[#FCD8D4]">
      <div className="w-full min-h-screen py-10 px-4 md:px-8 bg-[#FCD8D4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-6xl font-bold text-center text-[#47603D] mb-8">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mb-12">
          We'd love to hear from you! Whether you have questions, feedback, or just want to connect,
          feel free to reach out through any of the channels below.
          </p>

          <form className="space-y-6 ">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full p-3 border border-black rounded-md shadow-sm focus:ring-[#47603D] focus:border-[#4A7807]"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full p-3 border border-black rounded-md shadow-sm focus:ring-[#47603D] focus:border-[#4A7807]"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="mt-1 block w-full p-3 border border-black rounded-md shadow-sm focus:ring-[#47603D] focus:border-[#4A7807]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#47603D] text-white py-3 px-6  hover:bg-[#3b6405] transition rounded-2xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="text-left space-y-6 text-lg text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900">📍 Location:</h3>
            <p>Oyarifa, Greater Accra, Ghana</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">📞 Phone:</h3>
            <p>+233 24 679 9507</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">📧 Email:</h3>
            <a href="mailto:afbgoldenenterprise@gmail.com" className="text-blue-600 hover:underline">
              afbgoldenenterprise@gmail.com
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">🌐 Website:</h3>
            <a
              href="https://www.afbgoldencometics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.afbgoldencometics.com
            </a>
            <p className="text-sm text-gray-500">(Roycare section to be added)</p>
          </div>
        </div>

        {/* Responsive Social Section */}
        <div className="mt-16">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-left">Follow Us</h1>
          <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 justify-start">
            <a
              href="https://web.facebook.com/people/Roy-Car/pfbid035RSFepXsUYh599f6cwdGACwpo28u7nD6A7J8hczQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-[#466C00]"
            >
              <FaFacebook className="text-xl" />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.youtube.com/@Roycare360"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-[#466C00]"
            >
              <Youtube className="text-xl" />
              <span>YouTube</span>
            </a>

            <a
              href="https://www.instagram.com/roycare360/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-[#466C00]"
            >
              <Instagram className="text-xl" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/in/roycare-659009365/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-[#466C00]"
            >
              <Linkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.snapchat.com/add/roycare360"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-[#466C00]"
            >
              <FaSnapchatGhost className="text-xl" />
              <span>Snapchat</span>
            </a>

            <a
              href="https://www.tiktok.com/@roycare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-[#466C00]"
            >
              <FaTiktok className="text-xl" />
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact