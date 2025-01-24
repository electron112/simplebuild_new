import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to MyApp
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">
            A modern and responsive React application
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition-colors duration-200 flex items-center mx-auto">
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;