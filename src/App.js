import React from 'react';
import Homepage from './Page/Homepage';
import AppBar from './Components/AppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './Components/HeroSection';
import ProjectSection from './Components/ProjectSection';
import Work from './Page/Work';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
            <Route path="/projects" element={<ProjectSection />} />
            <Route path="/project/:projectId" element={<Work />} />
          </Routes>
        </ThemeProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;
