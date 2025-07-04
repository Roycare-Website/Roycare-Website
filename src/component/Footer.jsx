import { ChevronUp, Facebook, Instagram, Linkedin, Youtube, Search } from "lucide-react";
import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSearchSubmit = () => {
    console.log('Search triggered');
    // Handle search logic here
  };

  // Custom Snapchat and TikTok icons as SVG components
  const SnapchatIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001 12.017.001z"/>
    </svg>
  );

  const TikTokIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 w-full min-h-screen flex flex-col" role="contentinfo">
      {/* Main Footer Content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">ROYCARE</h2>
                <p className="text-gray-600 leading-relaxed text-base">
                  Your trusted partner for quality healthcare products and exceptional service. Committed to your well-being every step of the way.
                </p>
              </div>
              
              {/* Search Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  Quick Search
                </h3>
                <div className="flex shadow-sm">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 bg-white"
                    aria-label="Search products"
                  />
                  <button
                    onClick={handleSearchSubmit}
                    className="bg-[#466C00] hover:bg-green-800 text-white px-5 py-3 rounded-r-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 hover:shadow-md"
                    aria-label="Submit search"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Information Links */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Information
              </h3>
              <nav aria-label="Information links">
                <ul className="space-y-4">
                  {[
                    { name: 'About Us', href: '/about-us' },
                    { name: 'FAQ', href: '/faq' },
                    { name: 'Blog', href: '/blog' },
                    { name: 'Contact', href: '/contact' },
                    { name: 'Reviews', href: '/reviews' }
                  ].map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-[#466C00] transition-colors duration-200 text-sm font-medium hover:underline decoration-2 underline-offset-2"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Help & Support Links */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Help & Support
              </h3>
              <nav aria-label="Help and support links">
                <ul className="space-y-4">
                  {[
                    { name: 'Return Policy', href: '/return-policy' },
                    { name: 'Privacy Policy', href: '/privacy-policy' },
                    { name: 'Shipping Policy', href: '/shipping-policy' },
                    { name: 'Terms of Service', href: '/terms-of-service' },
                    { name: 'Accessibility', href: '/accessibility' },
                    { name: 'Account Login', href: '/login' }
                  ].map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-[#466C00] transition-colors duration-200 text-sm font-medium hover:underline decoration-2 underline-offset-2"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Media & Payment */}
            <div className="space-y-8">
              {/* Social Media */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
                  Follow Us
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { 
                      icon: Facebook, 
                      name: 'Facebook', 
                      url: 'https://web.facebook.com/people/Roy-Car/pfbid035RSFepXsUYh599f6cwdGACwpo28u7nD6A7J8hczQ',
                      ariaLabel: 'Follow us on Facebook',
                      color: 'hover:text-blue-600'
                    },
                    { 
                      icon: Youtube, 
                      name: 'YouTube', 
                      url: 'https://www.youtube.com/@Roycare360',
                      ariaLabel: 'Subscribe to our YouTube channel',
                      color: 'hover:text-red-600'
                    },
                    { 
                      icon: Instagram, 
                      name: 'Instagram', 
                      url: 'https://www.instagram.com/roycare360/',
                      ariaLabel: 'Follow us on Instagram',
                      color: 'hover:text-pink-600'
                    },
                    { 
                      icon: Linkedin, 
                      name: 'LinkedIn', 
                      url: 'https://www.linkedin.com/in/roycare-659009365/',
                      ariaLabel: 'Connect with us on LinkedIn',
                      color: 'hover:text-blue-700'
                    },
                    { 
                      icon: SnapchatIcon, 
                      name: 'Snapchat', 
                      url: 'https://www.snapchat.com/add/roycare360',
                      ariaLabel: 'Follow us on Snapchat',
                      color: 'hover:text-yellow-500'
                    },
                    { 
                      icon: TikTokIcon, 
                      name: 'TikTok', 
                      url: 'https://www.tiktok.com/@roycare',
                      ariaLabel: 'Follow us on TikTok',
                      color: 'hover:text-black'
                    }
                  ].map(({ icon: Icon, name, url, ariaLabel, color }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${color} transition-all duration-200 p-3 rounded-full hover:bg-white hover:shadow-md transform hover:scale-110`}
                      aria-label={ariaLabel}
                      title={name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  We Accept
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'PayPal', color: 'bg-blue-600' },
                    { name: 'Visa', color: 'bg-indigo-600' },
                    { name: 'Mastercard', color: 'bg-red-600' },
                    { name: 'American Express', color: 'bg-green-600' },
                    { name: 'RuPay', color: 'bg-orange-600' }
                  ].map((method) => (
                    <div key={method.name} className="flex items-center text-sm">
                      <span className={`w-3 h-3 ${method.color} rounded-full mr-3 shadow-sm`}></span>
                      <span className="text-gray-700 font-medium">{method.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-600 font-medium">
              © {new Date().getFullYear()} ROYCARE. All rights reserved. | Designed with care.
            </div>
            <nav aria-label="Legal links" className="flex items-center space-x-6 text-sm">
              <a
                href="/terms-conditions"
                className="text-gray-600 hover:text-[#466C00] transition-colors duration-200 font-medium hover:underline"
              >
                Terms & Conditions
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="/privacy-policy"
                className="text-gray-600 hover:text-[#466C00] transition-colors duration-200 font-medium hover:underline"
              >
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#47603D] hover:bg-[#466C00] text-white p-4 rounded-full shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 z-50 hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1"
        aria-label="Scroll to top of page"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </footer>
  );
}