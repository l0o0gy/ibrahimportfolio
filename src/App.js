import React from 'react'; 
import Homepage from './Page/Homepage';
import AppBar from './Components/AppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar />
          <Routes>
            <Route path='/' element={<Homepage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
