import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Software from './components/Software';
import BuildSystem from './components/BuildSystem';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Software />
        <BuildSystem />
        <Features />
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 MyApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;