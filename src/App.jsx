import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';  // Optional

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <MainContent />
      <Footer />  {/* Optional Footer */}
    </div>
  );
}

export default App;
