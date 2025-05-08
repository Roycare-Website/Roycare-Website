import React from "react"
import { ArrowRight, ChevronUp } from "lucide-react"
import { Facebook } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-[url(assets/images/)] bg-no-repeat bg-cover bg-white opacity-96 text-black w-full">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left section - Logo and Email Subscription */}
          <div className="space-y-6">
            <div className="font-bold text-2xl">ROYCARE</div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Email That's you Get Offers</h3>
              <p className="text-gray-600">Ut consequat semper viverra nam libero justo</p>
              <div className="flex items-center border border-gray-300 rounded">
                <input type="email" placeholder="Enter Mail ID" className="w-full p-3 bg-transparent outline-none" />
                <button className="p-3">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Information Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Information</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Faq
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Help</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Account Login
                </a>
              </li>
            </ul>
          </div>

          {/* Support and Payment Gateway */}
          <div className="space-y-8">
            {/* Support Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Social Media</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Beauty
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Wellness
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Investors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>

            {/* Payment Gateway */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Payment Gateway</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2 border border-gray-200 rounded p-2 bg-white">
                  <img src="https://placeholder.com/60x20" alt="PayPal" width="60" height="20" />
                  <span>Paypal</span>
                </div>
                <div className="flex items-center space-x-2 border border-gray-200 rounded p-2 bg-white">
                  <img src="https://placeholder.com/60x20" alt="Visa" width="60" height="20" />
                  <span>Visa</span>
                </div>
                <div className="flex items-center space-x-2 border border-gray-200 rounded p-2 bg-white">
                  <img src="https://placeholder.com/60x20" alt="Mastercard" width="60" height="20" />
                  <span>Mastercard</span>
                </div>
                <div className="flex items-center space-x-2 border border-gray-200 rounded p-2 bg-white">
                  <img src="https://placeholder.com/60x20" alt="American Express" width="60" height="20" />
                  <span>American Express</span>
                </div>
                <div className="flex items-center space-x-2 border border-gray-200 rounded p-2 bg-white">
                  <img src="https://placeholder.com/60x20" alt="RuPay" width="60" height="20" />
                  <span>RuPay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 py-4 px-4 relative">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">© 2023 AMIY, Wedesign Tech.</div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Privacy & Policy
            </a>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="absolute right-4 bottom-4 bg-[#063f27] text-white p-2 rounded"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      </div>
    </footer>
  )
}
