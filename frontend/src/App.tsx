import React from 'react';
import Logpage from './pages/logpage';
import Main from './pages/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logpage />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
