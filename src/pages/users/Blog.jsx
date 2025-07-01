import React, { useState, useMemo } from 'react';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const allBlogPosts = [
    {
      id: 1,
      title: "Beauty Spa Beauty And The Wellness Program",
      excerpt: "Pretium fusce id velit ut tortor. Tempor nec feugiat nisl pretium fusce...",
      date: "27 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Wellness"
    },
    {
      id: 2,
      title: "Top Services Packages For A Would-Be Bride",
      excerpt: "Nibh tellus molestie nunc non blandit massa. Nec feugiat nisl pretium fusce id....",
      date: "27 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Bridal Services"
    },
    {
      id: 3,
      title: "The Excellent Stress & Relaxation Spa Therapies",
      excerpt: "Nec feugiat nisl pretium fusce id. Faucibus scelerisque eleifend donec pretium vulputate sapien....",
      date: "27 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Therapy"
    },
    {
      id: 4,
      title: "Top Natural Beauty Ingredients For Spotless Face",
      excerpt: "Aliquam purus sit amet luctus venenatis lectus. Pretium fusce id velit ut tortor....",
      date: "27 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Natural Beauty"
    },
    {
      id: 5,
      title: "Do's & Dont's In At-Home Spa Treatments",
      excerpt: "Nec feugiat nisl tempor pretium fusce id. Nibh tellus molestie nunc non blandit....",
      date: "27 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Home Spa"
    },
    {
      id: 6,
      title: "How To Do Self Spa-Quality Pedicure At Home",
      excerpt: "Tellus molestie tempor nec feugiat nisl pretium fusce id. Nibh nunc non blandit....",
      date: "27 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Self Care"
    },
    {
      id: 7,
      title: "Essential Oils For Deep Relaxation Therapy",
      excerpt: "Discover the power of aromatherapy with essential oils that promote deep relaxation and stress relief....",
      date: "25 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Aromatherapy"
    },
    {
      id: 8,
      title: "Hydrating Face Masks For Glowing Skin",
      excerpt: "Learn about the best hydrating ingredients that will leave your skin radiant and moisturized....",
      date: "24 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Skincare"
    },
    {
      id: 9,
      title: "Couples Spa Day: Romance & Relaxation",
      excerpt: "Create the perfect romantic spa experience for you and your partner with these intimate treatments....",
      date: "23 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Couples Spa"
    },
    {
      id: 10,
      title: "Post-Workout Recovery Spa Treatments",
      excerpt: "Rejuvenate your muscles and restore your energy with specialized post-exercise spa therapies....",
      date: "22 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Recovery"
    },
    {
      id: 11,
      title: "Seasonal Skincare: Autumn Beauty Tips",
      excerpt: "Adapt your skincare routine for the changing season with these autumn-specific beauty treatments....",
      date: "21 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Seasonal Care"
    },
    {
      id: 12,
      title: "Meditation & Mindfulness In Spa Therapy",
      excerpt: "Combine mental wellness with physical relaxation through guided meditation spa experiences....",
      date: "20 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Mindfulness"
    },
    {
      id: 13,
      title: "Hot Stone Massage: Ancient Healing Techniques",
      excerpt: "Explore the therapeutic benefits of hot stone massage and its origins in ancient healing practices....",
      date: "19 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Massage Therapy"
    },
    {
      id: 14,
      title: "DIY Body Scrubs For Silky Smooth Skin",
      excerpt: "Create luxurious body scrubs at home using natural ingredients for professional spa results....",
      date: "18 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "DIY Beauty"
    },
    {
      id: 15,
      title: "Pregnancy Spa Treatments: Safe & Soothing",
      excerpt: "Discover safe and effective spa treatments designed specifically for expecting mothers....",
      date: "17 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Prenatal Care"
    },
    {
      id: 16,
      title: "Anti-Aging Facial Techniques That Work",
      excerpt: "Learn about proven anti-aging facial treatments that reduce wrinkles and restore youthful glow....",
      date: "16 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Anti-Aging"
    },
    {
      id: 17,
      title: "Spa Etiquette: Your Complete Guide",
      excerpt: "Master the art of spa etiquette with our comprehensive guide to proper spa behavior and customs....",
      date: "15 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Spa Tips"
    },
    {
      id: 18,
      title: "Detox Treatments For Mind & Body",
      excerpt: "Cleanse and purify your system with holistic detox treatments that refresh both mind and body....",
      date: "14 OCTOBER, 2023",
      image: "/api/placeholder/310/250",
      category: "Detox"
    }
  ];

  const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = useMemo(() => {
    return allBlogPosts.slice(startIndex, endIndex);
  }, [allBlogPosts, startIndex, endIndex]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const BlogCard = ({ post }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-3 tracking-wider">
          {post.date}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {post.excerpt}
        </p>
        <button 
          className="px-6 py-2 text-white text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:opacity-90 rounded-2xl"
          style={{ backgroundColor: '#47603D' }}
        >
          Read More
        </button>
      </div>
    </div>
  );

  const PaginationButton = ({ number, isActive, onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-10 h-10 rounded-full text-sm font-medium transition-colors duration-300 ${
        disabled 
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
          : isActive 
            ? 'text-white' 
            : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
      style={isActive && !disabled ? { backgroundColor: '#466C00' } : {}}
    >
      {number}
    </button>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCD8D4' }}>
      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <h1 className="text-6xl font-bold text-[#47603D] mb-6">
          Blog
        </h1>
        <div className="flex items-center justify-center space-x-3 text-[#47603D] text-sm tracking-widest">
          <span className="hover:text-opacity-80 cursor-pointer transition-colors">HOME</span>
          <span className="text-[#47603D] text-opacity-60">/</span>
          <span className="text-[#47603D] text-opacity-80">BLOG</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {currentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Page Info */}
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, allBlogPosts.length)} of {allBlogPosts.length} posts
            </p>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-3">
            <PaginationButton 
              number="<" 
              isActive={false}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNum = index + 1;
              return (
                <PaginationButton 
                  key={pageNum}
                  number={pageNum.toString()} 
                  isActive={pageNum === currentPage}
                  onClick={() => handlePageChange(pageNum)}
                  disabled={false}
                />
              );
            })}
            <PaginationButton 
              number=">" 
              isActive={false}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
