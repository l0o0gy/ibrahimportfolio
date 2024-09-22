import React from 'react';
import Homepage from './Page/Homepage';
import AppBar from './Components/AppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './Components/HeroSection';
import ProjectSection from './Components/ProjectSection';
import Work from './Page/Work';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SkillsSection from './Components/SkillsSection';
import ContactSection from './Components/ContactSection';
import AboutSection from './Components/AboutSection';

const theme = createTheme({
  typography: {
    fontFamily: 'Somar Medium Bold',
  },
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>

          <AppBar style={{ fontFamily: 'Somar Medium Bold' }} />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/herosection' element={<HeroSection />} />
            <Route path='/about' element={<AboutSection />} />
            <Route path='/skills' element={<SkillsSection />} />
            <Route path="/projects" element={<ProjectSection />} />
            <Route path="/project/:projectId" element={<Work />} />
            <Route path="//contact" element={<ContactSection />} />

          </Routes>
        </ThemeProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;
