// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import AHeader from './components/AHeader';
function App() {
  return (
   
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin_home/:username" element={<Home />} />
          <Route path="/register_user/:username" element={<Register />} />
        </Routes>
      </BrowserRouter>
      </div>
   
  );
}

export default App;
