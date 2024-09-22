import React from 'react';
import { Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import AbilitySection from '../Components/AbilitySection';
import SkillsSection from '../Components/SkillsSection';
import ProjectSection from '../Components/ProjectSection';
import ContactSection from '../Components/ContactSection';
import Footer from '../Components/Footer';

function Homepage() {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: abilityRef, inView: abilityInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: projectRef, inView: projectInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <HeroSection />

      <Box
        ref={aboutRef}
        sx={{
          transform: aboutInView ? 'translateY(0)' : 'translateY(-100px)',
          opacity: aboutInView ? 1 : 0,
          transition: 'transform 0.8s ease, opacity 0.8s ease',
        }}
      >
        <AboutSection />
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
          gap: 2,
        }}
      >
        <Box
          ref={abilityRef}
          sx={{
            transform: abilityInView ? 'translateY(0)' : 'translateY(-100px)',
            opacity: abilityInView ? 1 : 0,
            transition: 'transform 0.8s ease, opacity 0.8s ease',
          }}
        >
          <AbilitySection />
        </Box>

        <Box
          ref={skillsRef}
          sx={{
            transform: skillsInView ? 'translateY(0)' : 'translateY(-100px)',
            opacity: skillsInView ? 1 : 0,
            transition: 'transform 0.8s ease, opacity 0.8s ease',
          }}
        >
          <SkillsSection />
        </Box>
      </Box>
      <Box
        ref={projectRef}
        sx={{
          transform: projectInView ? 'translateY(0)' : 'translateY(-100px)',
          opacity: projectInView ? 1 : 0,
          transition: 'transform 0.8s ease, opacity 0.8s ease',
        }}
      >
        <ProjectSection />
      </Box>
      <Box
        ref={contactRef}
        sx={{
          transform: contactInView ? 'translateY(0)' : 'translateY(-100px)',
          opacity: contactInView ? 1 : 0,
          transition: 'transform 0.8s ease, opacity 0.8s ease',
        }}
      >
        <ContactSection />
      </Box>
      <Footer />
    </div>
  );
}

export default Homepage;
