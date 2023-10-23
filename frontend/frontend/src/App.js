// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin_home/:username" element={<Home />} />
        <Route path="/register_user/:username" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
