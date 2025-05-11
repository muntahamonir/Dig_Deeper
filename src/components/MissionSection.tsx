import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Exploring The Hidden Costs</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              This project explores the hidden environmental and social costs of extraction industries, 
              shares real stories from affected communities, and opens space for meaningful discussions 
              among students and future engineers.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As a Petroleum and Mining Engineering student, I've seen firsthand the disconnect between 
              what we're taught and the real-world impacts of our industry. Through this initiative, we aim 
              to bridge that gap and foster a new generation of responsible engineers.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Education</span>
              <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Awareness</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Sustainability</span>
              <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">Innovation</span>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Natural landscape affected by mining" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-600 rounded-full z-10 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-amber-400 rounded-full z-10 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;