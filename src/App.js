// src/App.js
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import './App.css';
import TermosCondicoes from './pages/TermosCondicoes/TermosCondicoes';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/termos" element={<TermosCondicoes />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
