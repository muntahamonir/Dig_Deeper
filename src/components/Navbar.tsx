import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-teal-800">
            Dig<span className="text-green-700">Deeper</span>
          </a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#mission" className="text-gray-700 hover:text-green-600 transition-colors">Mission</a>
            <a href="#activities" className="text-gray-700 hover:text-green-600 transition-colors">Activities</a>
            <a href="#impact" className="text-gray-700 hover:text-green-600 transition-colors">Impact</a>
            <a href="#join" className="text-gray-700 hover:text-green-600 transition-colors">Join Us</a>
          </div>
          
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
          <a 
            href="#mission" 
            className="text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Mission
          </a>
          <a 
            href="#activities" 
            className="text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Activities
          </a>
          <a 
            href="#impact" 
            className="text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Impact
          </a>
          <a 
            href="#join" 
            className="text-gray-700 hover:text-green-600 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Join Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;