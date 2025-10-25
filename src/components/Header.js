import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-webild-dark">Webild</h1>
        </div>

        {/* Right side - Social icons and CTA */}
        <div className="flex items-center space-x-4">
          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a 
              href="#" 
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-gray-600" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <span className="text-gray-600 font-bold text-sm">X</span>
            </a>
            <a 
              href="#" 
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Instagram className="w-4 h-4 text-gray-600" />
            </a>
          </div>

          {/* CTA Button */}
          <button className="px-6 py-2 bg-webild-purple text-white rounded-lg hover:bg-webild-blue transition-colors font-medium">
            Get Early Access
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;