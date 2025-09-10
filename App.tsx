import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Admissions from './pages/Admissions';
import Academics from './pages/Academics';
import StudentLife from './pages/StudentLife';
import ParentResources from './pages/ParentResources';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import Calendar from './pages/Calendar';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/parent-resources" element={<ParentResources />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
