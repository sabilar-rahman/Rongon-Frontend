
import React from 'react';
import HeroSection from './Component/HeroSection';
import PricingSection from './Component/PricingSection';
import AboutUsSection from './Component/AboutUsSection';

const Home = () => {
  return (
    <div>
     <HeroSection />
     <PricingSection />
     <AboutUsSection/>
    </div>
  );
};

export default Home;