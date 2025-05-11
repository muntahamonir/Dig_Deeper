import React from 'react';
import { Droplets, Mountain, HomeIcon, AlertTriangle } from 'lucide-react';

const impacts = [
  {
    icon: <Mountain size={32} className="text-amber-600" />,
    title: "Land Degradation",
    description: "Mining operations often leave landscapes permanently altered, causing habitat destruction and biodiversity loss.",
    statistic: "20 million",
    unit: "hectares",
    context: "of land damaged by mining globally"
  },
  {
    icon: <Droplets size={32} className="text-blue-600" />,
    title: "Water Pollution",
    description: "Chemical leaching and waste disposal contaminate water sources, affecting ecosystems and communities.",
    statistic: "3-4 billion",
    unit: "cubic meters",
    context: "of contaminated water produced annually"
  },
  {
    icon: <HomeIcon size={32} className="text-brown-600" />,
    title: "Community Displacement",
    description: "Extraction projects often force local communities to relocate, disrupting livelihoods and cultural ties.",
    statistic: "15+",
    unit: "million people",
    context: "displaced by resource extraction projects"
  },
  {
    icon: <AlertTriangle size={32} className="text-red-600" />,
    title: "Health Concerns",
    description: "Workers and nearby communities face increased health risks from exposure to harmful substances.",
    statistic: "40%",
    unit: "higher rates",
    context: "of respiratory and other diseases in mining communities"
  }
];

const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-stone-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why This Matters</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The extraction industry has far-reaching consequences that extend beyond economic benefits.
            As future engineers, understanding these impacts is crucial to developing sustainable practices.
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {impacts.map((impact, index) => (
            <div 
              key={index} 
              className="p-6 bg-stone-700 rounded-lg hover:bg-stone-600 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-stone-800 mr-4 flex-shrink-0">
                  {impact.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{impact.title}</h3>
                  <p className="text-gray-300 mb-4">{impact.description}</p>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold text-green-400">{impact.statistic}</span>
                    <span className="ml-1 text-sm text-gray-400">{impact.unit}</span>
                    <span className="ml-2 text-xs text-gray-400">— {impact.context}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-green-700 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-3">Responsible Engineering Matters</h3>
          <p className="text-gray-100">
            As future engineers, we have the power and responsibility to develop better practices and 
            technologies that minimize harm while maximizing benefits. Understanding these impacts is 
            the first step toward creating sustainable solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;