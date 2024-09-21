import React from 'react';
// import { useData } from '../assets/Contacts/store';
import { Box } from '@mui/material';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import AbilitySection from '../Components/AbilitySection';

function Homepage() {

  return (
    <div >
      <HeroSection />
      <AboutSection/>
      <AbilitySection/>
    </div>
  );
}

export default Homepage;
