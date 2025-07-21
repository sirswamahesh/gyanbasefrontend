import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import CoursesSection from '../components/Home/CoursesSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-base-200 text-white">
      <HeroSection />
      <CoursesSection />
    </div>
  );
};

export default HomePage;
