import React from 'react';
import { Mail, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Dig<span className="text-green-500">Deeper</span></h3>
            <p className="mb-4 text-gray-400 leading-relaxed">
              A student-led initiative to raise awareness about the environmental 
              and social impact of mining and oil extraction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#mission" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Our Mission</a>
              </li>
              <li>
                <a href="#activities" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Planned Activities</a>
              </li>
              <li>
                <a href="#impact" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Why It Matters</a>
              </li>
              <li>
                <a href="#join" className="text-gray-400 hover:text-green-500 transition-colors duration-300">Join Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>E Building , SUST</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:info@digdeeper.org" className="hover:text-green-500 transition-colors duration-300">
                  digdeeperthinkgreener@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dig Deeper, Think Greener. All rights reserved.</p>
          <p className="mt-2">
            Made with 💚 by students who care about our planet's future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
