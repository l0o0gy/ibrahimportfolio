import React from 'react'; 
import Homepage from './Page/Homepage';
import AppBar from './Components/AppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HeroSection from './Components/HeroSection';
import ProjectSection from './Components/ProjectSection';
import Work from './Page/Work';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar />
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/herosection' element={<HeroSection/>} />
            <Route path="/projects" element={<ProjectSection />} />
            <Route path="/project/:projectId" element={<Work />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
