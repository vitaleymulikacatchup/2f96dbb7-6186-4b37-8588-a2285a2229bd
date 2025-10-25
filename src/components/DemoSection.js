import React from 'react';
import { Plus } from 'lucide-react';

const DemoSection = () => {
  return (
    <section className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Demo Card */}
        <div className="glassmorphism rounded-2xl p-8 mb-12">
          {/* Header */}
          <div className="mb-8">
            <p className="text-gray-700 text-lg mb-6">
              Build a sleek, glassmorphic Apple-style site using these 2 images for the navigation bar button.
            </p>
            
            {/* Reference Images */}
            <div className="flex items-start space-x-8 mb-8">
              {/* Nav Reference */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 nav-reference flex items-center justify-center rounded-lg">
                  <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Nav Reference</h3>
                  <p className="text-sm text-gray-500">Translucent navigation header</p>
                </div>
              </div>
              
              {/* Button Reference */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 button-reference flex items-center justify-center rounded-lg">
                  <div className="w-6 h-1 bg-white rounded-full opacity-90"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Button Reference</h3>
                  <p className="text-sm text-gray-500">Frosted blur effect sample</p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <span className="text-sm">🔗</span>
                  <span className="text-sm font-medium">Clone</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <span className="text-sm">📋</span>
                  <span className="text-sm font-medium">Plan</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-webild-purple text-white hover:bg-webild-blue transition-colors">
                  <span className="text-sm font-bold">▶</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-webild-purple text-white rounded-lg hover:bg-webild-blue transition-colors font-medium text-lg">
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;