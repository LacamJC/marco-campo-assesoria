// src/App.js
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import './App.css';
import TermosCondicoes from './pages/TermosCondicoes/TermosCondicoes';
import Footer from './components/Footer/Footer';
import AtuacaoPage from './pages/AtuacaoPage/AtuacaoPage.jsx';
import NotFoundMessage from './components/NotFoundMessage/NotFoundMessage.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/termos" element={<TermosCondicoes />} />
          <Route path="atuacao/:id" element={<AtuacaoPage />} />
          <Route path="*" element={<NotFoundMessage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
