import React from 'react';

const Hero = () => {
  return (
    <section className="relative px-6 py-20 hero-gradient">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-webild-dark">You Dream, </span>
          <span className="text-webild-purple">We Bild</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Generate Websites Instantly, Customize to Perfection.
        </p>
      </div>
    </section>
  );
};

export default Hero;