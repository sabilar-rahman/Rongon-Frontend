
import React from 'react';
import HeroSection from './Component/HeroSection';
import AboutUsSection from './Component/AboutUsSection';
import ContactUsSection from './Component/ContactUsSection';
import CourseWeOfferSection from './Component/CourseWeOfferSection';

const Home = () => {
  return (
    <div>
     <HeroSection />
     <CourseWeOfferSection />
     <AboutUsSection/>
     <ContactUsSection/>
    </div>
  );
};

export default Home;