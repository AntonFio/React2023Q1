import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './page/AboutUs';
import Error from './page/Error';
import Home from './page/Home';
import Form from './page/Form';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
