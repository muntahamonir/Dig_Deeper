import React, { useState } from 'react';

const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section id="join" className="py-20 bg-green-700 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-600 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-800 rounded-full opacity-20 transform translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Thinking Greener With Us</h2>
          <p className="text-lg text-green-100 mb-8">
            Join our community of students, engineers, and activists working toward a more sustainable 
            approach to resource extraction. Stay updated on events, discussions, and opportunities.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 rounded-md font-medium transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {loading ? 'Signing up...' : 'Sign Up'}
                </button>
              </div>
              <p className="text-sm mt-3 text-green-200">
                We respect your privacy and will never share your information.
              </p>
            </form>
          ) : (
            <div className="bg-green-600 p-6 rounded-lg animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">Thank You For Joining!</h3>
              <p>
                You're now part of our community. We'll keep you updated on all our events and activities.
              </p>
            </div>
          )}
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="text-3xl font-bold text-amber-300">50+</h4>
              <p className="text-green-200">Students Involved</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-amber-300">12</h4>
              <p className="text-green-200">Planned Events</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-amber-300">5</h4>
              <p className="text-green-200">Partner Organizations</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-amber-300">3</h4>
              <p className="text-green-200">Universities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;