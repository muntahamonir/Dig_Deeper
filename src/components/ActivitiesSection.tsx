import React from 'react';
import { CalendarClock, Users, BookOpen, MessagesSquare } from 'lucide-react';

const activities = [
  {
    icon: <CalendarClock size={40} className="text-green-600 mb-4" />,
    title: "Small Talks",
    description: "Informal sessions with industry experts and environmental activists discussing the challenges and solutions in resource extraction."
  },
  {
    icon: <Users size={40} className="text-green-600 mb-4" />,
    title: "Group Discussions",
    description: "Interactive sessions where students can share perspectives, debate ideas, and develop critical thinking about industry practices."
  },
  {
    icon: <BookOpen size={40} className="text-green-600 mb-4" />,
    title: "Workshops",
    description: "Hands-on learning experiences focusing on sustainable extraction methods and innovative technologies."
  },
  {
    icon: <MessagesSquare size={40} className="text-green-600 mb-4" />,
    title: "Panel Forums",
    description: "Bringing together industry professionals, academics, and community representatives to discuss real-world challenges."
  }
];

const ActivitiesSection: React.FC = () => {
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Planned Activities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for a series of engaging events designed to deepen understanding and inspire action.
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className="p-6 bg-stone-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-green-50 flex flex-col items-center text-center"
            >
              {activity.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{activity.title}</h3>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-700 italic mb-4">
            "The future of our planet depends on how we educate the next generation of engineers."
          </p>
          <p className="text-sm text-gray-500">All events will take place at the University Engineering Building</p>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;