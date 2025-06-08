
import React from 'react';
import HeroSection from './Component/HeroSection';
import PricingSection from './Component/PricingSection';
import AboutUsSection from './Component/AboutUsSection';
import ContactUsSection from './Component/ContactUsSection';

const Home = () => {
  return (
    <div>
     <HeroSection />
     <PricingSection />
     <AboutUsSection/>
     <ContactUsSection/>
    </div>
  );
};

export default Home;