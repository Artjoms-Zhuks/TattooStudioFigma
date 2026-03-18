import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// ... остальные импорты
import Header from './components/Header';
import Home from './pages/Home';
import Designs from './pages/Designs';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';


function AppContent() {
  const location = useLocation();
  const showFooter = location.pathname !== '/contact';

  return (
    <>
      <Header />
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

// В главном App просто рендерим Router и контент
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;