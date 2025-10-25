import React from 'react';

const VideoSection = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Video Thumbnail */}
        <div className="relative inline-block">
          <div className="w-64 h-36 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
            {/* Play Button */}
            <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
              <span className="text-2xl text-gray-800 ml-1">▶</span>
            </button>
            
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/30 rounded-full"></div>
            <div className="absolute top-1/2 right-6 w-4 h-4 bg-white/25 rounded-full"></div>
          </div>
          
          {/* Watch Label */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="bg-white rounded-full px-4 py-2 shadow-lg border">
              <span className="text-sm font-medium text-gray-700">Watch Showreel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;