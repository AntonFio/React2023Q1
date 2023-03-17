import './App.css';
import Header from './components/Header/Header';
import { Router, Routes, Route } from 'react-router-dom';
import AboutUs from './page/AboutUs';
import Error from './page/Error';
import Home from './page/Home';
import Test from './page/Test';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
