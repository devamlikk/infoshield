import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import TheIssue from './pages/TheIssue.jsx';
import Quiz from './pages/Quiz.jsx';
import HowToHelp from './pages/HowToHelp.jsx';
import Contact from './pages/Contact.jsx';
import Community from './pages/Community.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout currentPageName="Home"><Home /></Layout>} />
        <Route path="/TheIssue" element={<Layout currentPageName="TheIssue"><TheIssue /></Layout>} />
        <Route path="/Quiz" element={<Layout currentPageName="Quiz"><Quiz /></Layout>} />
        <Route path="/HowToHelp" element={<Layout currentPageName="HowToHelp"><HowToHelp /></Layout>} />
        <Route path="/Community" element={<Layout currentPageName="Community"><Community /></Layout>} />
        <Route path="/Contact" element={<Layout currentPageName="Contact"><Contact /></Layout>} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
            <div className="text-center">
              <h1 className="text-7xl font-light text-slate-600">404</h1>
              <h2 className="text-2xl font-medium text-white mt-4">Page Not Found</h2>
              <button onClick={() => window.location.href = '/'} className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-400 transition-colors">
                Go Home
              </button>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;