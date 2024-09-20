import React from 'react'; 
import Homepage from './Page/Homepage';
import AppBar from './Components/AppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HeroSection from './Components/HeroSection';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar />
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='herosection' element={<HeroSection/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
