import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Designs from './pages/Designs';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

function AppContent() {
  const location = useLocation();
  // Учитываем, что на GitHub Pages к пути может добавиться префикс, 
  // но useLocation обычно отдает путь относительно basename
  const showFooter = location.pathname !== '/contact';

  return (
    <>
      <Header />
      {/* ЛИШНИЙ ТЕГ <Router> ОТСЮДА УДАЛИЛИ */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Designs />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    // ПЕРЕДАЕМ basename СЮДА
    <Router basename="/TattooStudioFigma">
      <AppContent />
    </Router>
  );
}

export default App;