import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6069544/pexels-photo-6069544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          transform: `translateY(${offset * 0.3}px)`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 to-black/30" />
      
      <div className="container mx-auto px-4 md:px-6 z-20 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
            Dig Deeper, <span className="text-green-400">Think Greener</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
            Rethinking Resource Extraction for a More Sustainable Future
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#mission"
              className="px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-medium rounded-md transition-all duration-300 text-center transform hover:scale-105"
            >
              Learn More
            </a>
            <a
              href="#join"
              className="px-8 py-3 bg-transparent border-2 border-white hover:border-green-400 hover:text-green-400 text-white font-medium rounded-md transition-all duration-300 text-center"
            >
              Join The Movement
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;