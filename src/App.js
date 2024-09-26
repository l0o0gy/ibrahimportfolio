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
import { DataProvider } from './assets/Contacts/store';
import CoverPage from './Page/CoverPage';
import FlyerPage from './Page/FlyerPage';
import LogoPage from './Page/LogoPage';
import MenuPage from './Page/MenuPage';
import SoicalMediaPage from './Page/SoicalMediaPage';
import ThreedItems from './Page/ThreedItems';

const theme = createTheme({
  typography: {
    fontFamily: 'Somar Medium Bold',
  },
});


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <DataProvider>

        <ThemeProvider theme={theme}>

          <AppBar style={{ fontFamily: 'Somar Medium Bold' }} />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/herosection' element={<HeroSection />} />
            <Route path='/about' element={<AboutSection />} />
            <Route path='/skills' element={<SkillsSection />} />
            <Route path="/projects" element={<ProjectSection />} />
            <Route path="/project/:projectId" element={<Work />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/threedItem" element={<ThreedItems/>} />
            <Route path="/cover" element={<CoverPage />} />
            <Route path="/flyer" element={<FlyerPage />} />
            <Route path="/logo" element={<LogoPage  />} />
            <Route path="/menu" element={<MenuPage/>} />
            <Route path="/socialmedia" element={<SoicalMediaPage />} />

          </Routes>
        </ThemeProvider>
        </DataProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;
