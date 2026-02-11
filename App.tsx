
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WhyChooseUs from './pages/WhyChooseUs';
import ContactPage from './pages/ContactPage';
import SmartAssistant from './components/SmartAssistant';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-zinc-100 selection:bg-green-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/why-us" element={<WhyChooseUs />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        {/* Floating AI Assistant for professional support */}
        <SmartAssistant />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
