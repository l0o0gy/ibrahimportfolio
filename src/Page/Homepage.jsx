import React from 'react';
// import { useData } from '../assets/Contacts/store';
import { Box } from '@mui/material';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';

function Homepage() {

  return (
    <div >
      <HeroSection />
      <AboutSection/>
    </div>
  );
}

export default Homepage;
