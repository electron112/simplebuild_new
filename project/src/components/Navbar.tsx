import React from 'react';
import { Menu, X, Home, Info, Mail, Github } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">MyApp</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink icon={<Home size={18} />} text="Home" />
            <NavLink icon={<Info size={18} />} text="About" />
            <NavLink icon={<Mail size={18} />} text="Contact" />
            <NavLink icon={<Github size={18} />} text="Github" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink icon={<Home size={18} />} text="Home" />
            <MobileNavLink icon={<Info size={18} />} text="About" />
            <MobileNavLink icon={<Mail size={18} />} text="Contact" />
            <MobileNavLink icon={<Github size={18} />} text="Github" />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <a
    href="#"
    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200"
  >
    <span className="mr-2">{icon}</span>
    {text}
  </a>
);

const MobileNavLink = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <a
    href="#"
    className="flex items-center text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
  >
    <span className="mr-2">{icon}</span>
    {text}
  </a>
);

export default Navbar;