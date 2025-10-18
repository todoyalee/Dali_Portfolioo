import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button.js';
import {
  BriefcaseBusiness,
  Terminal,
  BrainCircuit,
  Mail,
  Menu,
  X,
  House,
  Trophy
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navItems = [
    { href: "#home", label: "Home", icon: House },
    { href: "#experience", label: "Experience", icon: BriefcaseBusiness },
    { href: "#skills", label: "Skills", icon: BrainCircuit },
    { href: "#projects", label: "Projects", icon: Terminal },
    { href: "#achievements", label: "Achievements", icon: Trophy }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 ${
        isScrolled 
          ? ' backdrop-blur-md shadow-lg shadow-black/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1 justify-center">
            {/* Main Navigation */}
            <div className="flex px-8 py-2  backdrop-blur-md rounded-full border border-orange-800 shadow-xl">
              <div className="flex space-x-8 items-center justify-center">
                {navItems.map((item) => (
                  <IslandNavLink key={item.href} href={item.href}>
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </IslandNavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button
              className="px-8 py-2 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 hover:from-red-600 hover:via-orange-400 hover:to-yellow-400 text-white focus:ring-2 focus:ring-red-600 hover:shadow-xl transition duration-200 hover:text-white"
              asChild
            >
              <a href="mailto:aeijthabet01@gmail.com">
                <span className="relative flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </span>
              </a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-orange-500 border-orange-500 bg-black"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden p-4 bg-black border-t border-yellow-200 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <MobileNavLink 
                key={item.href} 
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </MobileNavLink>
            ))}
            <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const IslandNavLink = ({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode;
}) => {
  return (
    <a 
      href={href} 
      className="relative px-3 py-2 text-gray-300 hover:text-white transition-all duration-300 group flex items-center"
    >
      <span className="relative z-10 flex items-center">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-black-500/20 group-hover:via-orange-500/20 group-hover:to-yellow-500/20 opacity-0 group-hover:opacity-100 rounded-full blur-sm transition-all duration-300"></span>
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
    </a>
  );
};

const MobileNavLink = ({ 
  href, 
  children,
  onClick
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-gray-300 hover:text-white py-2 px-4 block hover:bg-gray-800 rounded-md transition-colors flex items-center"
  >
    {children}
  </a>
);

export default Navbar;
