import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing'; // Import your Landing component
import Home from './pages/Home'; // Import your Home component

function App() {
  const navigate = useNavigate();

setTimeout(() => {
  // navigate('/home');
}, 3000);

  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
  );
}

export default App;
