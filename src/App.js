import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DemoSection from './components/DemoSection';
import VideoSection from './components/VideoSection';

function App() {
  return (
    <div className="min-h-screen bg-webild-gray">
      <Header />
      <Hero />
      <DemoSection />
      <VideoSection />
    </div>
  );
}

export default App;